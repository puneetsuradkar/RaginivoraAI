import { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Users, 
    Filter, 
    CheckCircle, 
    Clock, 
    MessageSquare, 
    Search, 
    LogOut, 
    Calendar,
    Briefcase,
    Phone,
    Mail,
    ChevronDown,
    Save,
    ExternalLink
} from 'lucide-react';

const STATUS_COLORS = {
    'New': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Contacted': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'In Progress': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    'Closed': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Rejected': 'bg-red-500/20 text-red-400 border-red-500/30',
};

export default function AdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [filter, setFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedLead, setExpandedLead] = useState(null);
    const [editingNotes, setEditingNotes] = useState({});

    // Login Handler
    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        // Simple client-side check to initiate the first fetch
        fetchLeads(password);
    };

    const fetchLeads = async (pwd) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/admin/leads?password=${encodeURIComponent(pwd)}`);
            const data = await res.json();
            if (res.ok) {
                setLeads(data);
                setIsAuthenticated(true);
                localStorage.setItem('admin_pwd', pwd);
            } else if (res.status === 401) {
                setError('Invalid admin password');
            } else if (res.status === 503) {
                setError(`Database error: ${data.hint || data.message}`);
            } else {
                setError(data.message || 'Server error — check console');
            }
        } catch (err) {
            setError('Failed to connect to server');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const savedPwd = localStorage.getItem('admin_pwd');
        if (savedPwd) {
            setPassword(savedPwd);
            fetchLeads(savedPwd);
        }
    }, []);

    const updateLeadStatus = async (id, newStatus) => {
        try {
            const res = await fetch('/api/admin/update-lead', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, status: newStatus, password }),
            });
            if (res.ok) {
                setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l));
            }
        } catch (err) {
            console.error('Update failed', err);
        }
    };

    const updateLeadNotes = async (id) => {
        const notes = editingNotes[id];
        try {
            const res = await fetch('/api/admin/update-lead', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, notes, password }),
            });
            if (res.ok) {
                setLeads(leads.map(l => l.id === id ? { ...l, notes } : l));
                // Clear editing state for this lead
                const newEditingNotes = { ...editingNotes };
                delete newEditingNotes[id];
                setEditingNotes(newEditingNotes);
            }
        } catch (err) {
            console.error('Update failed', err);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('admin_pwd');
        setIsAuthenticated(false);
        setPassword('');
        setLeads([]);
    };

    const filteredLeads = leads.filter(lead => {
        const matchesFilter = filter === 'All' || lead.status === filter;
        const matchesSearch = 
            lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lead.service.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center p-6 font-sans">
                <Head><title>Admin Login | Raginivora Studio</title></Head>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-3xl"
                >
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 italic font-black text-xl text-white">R</div>
                        <h1 className="text-2xl font-black text-white">Admin Portal</h1>
                        <p className="text-neutral-500 text-sm mt-2">Enter secret credentials to manage leads</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-2 block">Access Key</label>
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-all placeholder-neutral-700" 
                                placeholder="••••••••••••"
                                required
                            />
                        </div>
                        {error && <p className="text-red-400 text-xs text-center">{error}</p>}
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-neutral-200 transition-all flex items-center justify-center gap-2"
                        >
                            {loading ? <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" /> : 'Enter Dashboard'}
                        </button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30">
            <Head><title>Admin Dashboard | Raginivora Studio</title></Head>

            {/* Sidebar / Top Nav */}
            <nav className="border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="text-lg font-black tracking-tighter">Raginivora<span className="text-purple-500">Studio</span> <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] uppercase tracking-widest ml-2 text-neutral-400">Admin</span></div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex flex-col items-end">
                            <span className="text-[10px] font-bold uppercase text-neutral-500 tracking-wider">System Status</span>
                            <span className="text-xs text-green-500 flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Operational</span>
                        </div>
                        <button 
                            onClick={handleLogout}
                            className="p-2 hover:bg-white/10 rounded-lg text-neutral-400 hover:text-white transition-all"
                        >
                            <LogOut size={20} />
                        </button>
                    </div>
                </div>
            </nav>

            <main className="max-w-[1400px] mx-auto p-6 md:p-10">
                
                {/* Dashboard Stats / Controls */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                    <div className="bg-white/5 border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center"><Users size={24} /></div>
                        <div>
                            <div className="text-2xl font-black">{leads.length}</div>
                            <div className="text-xs text-neutral-500 font-bold uppercase">Total Leads</div>
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/5 p-6 rounded-2xl flex items-center gap-4">
                        <div className="w-12 h-12 bg-green-500/20 text-green-400 rounded-xl flex items-center justify-center"><CheckCircle size={24} /></div>
                        <div>
                            <div className="text-2xl font-black">{leads.filter(l => l.status === 'Closed').length}</div>
                            <div className="text-xs text-neutral-500 font-bold uppercase">Closed</div>
                        </div>
                    </div>
                    <div className="bg-white/5 border border-white/5 p-6 rounded-2xl flex items-center gap-4 col-span-1 md:col-span-2">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
                            <input 
                                type="text" 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search client name, email or service..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-all font-medium"
                            />
                        </div>
                        <div className="flex gap-2">
                            {['All', 'New', 'Contacted', 'In Progress'].map(f => (
                                <button 
                                    key={f}
                                    onClick={() => setFilter(f)}
                                    className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${filter === f ? 'bg-white text-black border-white' : 'border-white/10 text-neutral-500 hover:text-white'}`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Lead Table / Cards */}
                <div className="grid grid-cols-1 gap-4">
                    {filteredLeads.length === 0 ? (
                        <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
                            <Filter size={40} className="mx-auto text-neutral-700 mb-4" />
                            <p className="text-neutral-500 font-medium">No leads found matching your filters.</p>
                        </div>
                    ) : (
                        filteredLeads.map((lead) => (
                            <motion.div
                                layout
                                key={lead.id}
                                className={`group bg-[#111] border rounded-2xl transition-all duration-300 ${expandedLead === lead.id ? 'border-purple-500/50 shadow-2xl shadow-purple-500/10' : 'border-white/5 hover:border-white/20'}`}
                            >
                                <div 
                                    className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer"
                                    onClick={() => setExpandedLead(expandedLead === lead.id ? null : lead.id)}
                                >
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center font-black text-white italic">
                                            {lead.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg group-hover:text-purple-400 transition-colors flex items-center gap-2">
                                                {lead.name}
                                                <span className={`text-[10px] px-2 py-0.5 rounded border uppercase tracking-wider ${STATUS_COLORS[lead.status]}`}>
                                                    {lead.status}
                                                </span>
                                            </h3>
                                            <div className="text-sm text-neutral-500 flex items-center gap-4 mt-1">
                                                <span className="flex items-center gap-1.5"><Mail size={14} /> {lead.email}</span>
                                                <span className="flex items-center gap-1.5"><Phone size={14} /> {lead.phone}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 md:gap-10">
                                        <div className="flex flex-col items-center md:items-start">
                                            <span className="text-[10px] uppercase font-bold text-neutral-600 tracking-wider">Service</span>
                                            <span className="text-sm font-semibold">{lead.service}</span>
                                        </div>
                                        <div className="hidden lg:flex flex-col items-start min-w-[120px]">
                                            <span className="text-[10px] uppercase font-bold text-neutral-600 tracking-wider">Date</span>
                                            <span className="text-sm font-semibold text-neutral-400">{new Date(lead.createdAt).toLocaleDateString()}</span>
                                        </div>
                                        <div className="hidden lg:flex flex-col items-start min-w-[120px]">
                                            <span className="text-[10px] uppercase font-bold text-neutral-600 tracking-wider">Budget</span>
                                            <span className="text-sm font-semibold text-purple-400">{lead.budget || 'N/A'}</span>
                                        </div>
                                        <ChevronDown size={20} className={`text-neutral-600 transition-all ${expandedLead === lead.id ? 'rotate-180 text-purple-500' : ''}`} />
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {expandedLead === lead.id && (
                                        <motion.div 
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden bg-black/40 border-t border-white/5 rounded-b-2xl"
                                        >
                                            <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
                                                <div className="space-y-6">
                                                    <div>
                                                        <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-black mb-3 block">Project Information</label>
                                                        <div className="bg-white/5 p-5 rounded-xl border border-white/5 space-y-4">
                                                            <div className="flex justify-between items-center text-sm">
                                                                <span className="text-neutral-500">Timeline</span>
                                                                <span className="font-semibold text-white">{lead.timeline || 'Flexible'}</span>
                                                            </div>
                                                            <div>
                                                                <span className="text-neutral-500 text-sm block mb-2">Description</span>
                                                                <p className="text-sm text-neutral-300 leading-relaxed italic border-l-2 border-purple-500/40 pl-4">
                                                                    "{lead.description || 'No project details provided.'}"
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex gap-3">
                                                        <a 
                                                            href={`mailto:${lead.email}`} 
                                                            className="flex-1 bg-white text-black py-3 rounded-xl font-bold text-center text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2"
                                                        >
                                                            <Mail size={16} /> Reply via Gmail
                                                        </a>
                                                        <a 
                                                            href={`tel:${lead.phone}`} 
                                                            className="flex-1 bg-white/10 text-white py-3 rounded-xl font-bold text-center text-sm hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                                                        >
                                                            <Phone size={16} /> Voice Call
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="space-y-6">
                                                    <div>
                                                        <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-black mb-3 block">Manage Lead</label>
                                                        <div className="space-y-4">
                                                            <div>
                                                                <span className="text-xs text-neutral-600 block mb-2 font-bold">Update Status</span>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {Object.keys(STATUS_COLORS).map(s => (
                                                                        <button 
                                                                            key={s}
                                                                            onClick={() => updateLeadStatus(lead.id, s)}
                                                                            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border transition-all ${lead.status === s ? STATUS_COLORS[s] : 'border-white/5 text-neutral-600 hover:border-white/20 hover:text-white'}`}
                                                                        >
                                                                            {s}
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            <div className="relative">
                                                                <span className="text-xs text-neutral-600 block mb-2 font-bold">Follow-up Notes</span>
                                                                <textarea 
                                                                    value={editingNotes[lead.id] !== undefined ? editingNotes[lead.id] : lead.notes}
                                                                    onChange={(e) => setEditingNotes({ ...editingNotes, [lead.id]: e.target.value })}
                                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-all h-28 resize-none placeholder-neutral-700"
                                                                    placeholder="Add private notes about this lead..."
                                                                />
                                                                {editingNotes[lead.id] !== undefined && (
                                                                    <button 
                                                                        onClick={() => updateLeadNotes(lead.id)}
                                                                        className="absolute bottom-3 right-3 bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-500 transition-all shadow-lg"
                                                                    >
                                                                        <Save size={16} />
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
}
