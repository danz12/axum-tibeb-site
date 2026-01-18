import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { collections as defaultCollections, type CollectionItem } from '@/data/siteData';
import { getStoredCollections, saveCollections } from '@/data/collectionsStore';

const emptyForm = {
  name: '',
  nameAmharic: '',
  image: '',
  description: '',
};

const AdminCollections: React.FC = () => {
  const [collections, setCollections] = useState<CollectionItem[]>(() => getStoredCollections());
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState<string | null>(null);

  const nextId = useMemo(() => {
    const maxId = collections.reduce((max, item) => Math.max(max, item.id), 0);
    return maxId + 1;
  }, [collections]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (error) {
      setError(null);
    }
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.image.trim() || !form.description.trim()) {
      setError('Name, image URL, and description are required.');
      return;
    }

    const newItem: CollectionItem = {
      id: nextId,
      name: form.name.trim(),
      nameAmharic: form.nameAmharic.trim() || form.name.trim(),
      image: form.image.trim(),
      description: form.description.trim(),
    };

    const next = [newItem, ...collections];
    setCollections(next);
    saveCollections(next);
    setForm(emptyForm);
  };

  const handleDelete = (id: number) => {
    const next = collections.filter((item) => item.id !== id);
    setCollections(next);
    saveCollections(next);
  };

  const handleReset = () => {
    setCollections(defaultCollections);
    saveCollections(defaultCollections);
  };

  return (
    <div className="min-h-screen bg-[#F7F1E8] text-[#2C2C2C] relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -right-20 h-[420px] w-[420px] rounded-full bg-[#D4A574]/35 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-[520px] w-[520px] rounded-full bg-[#8B2635]/20 blur-3xl"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_55%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col gap-6 mb-10 rounded-3xl border border-white/60 bg-white/70 backdrop-blur-md shadow-[0_20px_60px_-40px_rgba(44,44,44,0.8)] p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#2C2C2C] text-white text-xs uppercase tracking-[0.2em] px-4 py-2">
                Admin
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4A574]"></span>
                Collections
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mt-4">Collections Manager</h1>
              <p className="text-gray-600 mt-2 max-w-2xl">Add and manage featured collections. Changes are saved in this browser only.</p>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/" className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white transition-colors">
                Back to Site
              </Link>
              <button onClick={handleReset} className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#8B2635] text-white hover:bg-[#6d1e2a] transition-colors">
                Reset Defaults
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-white/60 px-3 py-1">
              {collections.length} collections
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-white/60 px-3 py-1">
              Local storage enabled
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
          <div className="rounded-2xl border border-white/70 bg-white/80 backdrop-blur-md shadow-[0_25px_60px_-45px_rgba(44,44,44,0.8)] p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Current Collections</h2>
              <span className="text-sm text-gray-500">{collections.length} items</span>
            </div>
            <div className="space-y-4">
              {collections.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl border border-white/70 bg-white/70 shadow-sm">
                  <div className="w-full sm:w-24 h-40 sm:h-28 rounded-xl overflow-hidden bg-white flex-shrink-0 ring-1 ring-black/5">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-sm text-[#8B2635]">{item.nameAmharic}</p>
                      </div>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-sm text-red-600 hover:text-red-700"
                      >
                        Delete
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
              {collections.length === 0 && (
                <div className="text-sm text-gray-500">No collections yet. Add one from the form.</div>
              )}
            </div>
          </div>

          <div className="rounded-2xl border border-white/70 bg-white/80 backdrop-blur-md shadow-[0_25px_60px_-45px_rgba(44,44,44,0.8)] p-6">
            <h2 className="text-xl font-semibold mb-4">Add Collection</h2>
            {error && (
              <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                {error}
              </div>
            )}
            <form onSubmit={handleAdd} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-black/10 bg-white/80 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B2635]/40"
                  placeholder="Traditional Wear"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Name (Amharic)</label>
                <input
                  name="nameAmharic"
                  value={form.nameAmharic}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-black/10 bg-white/80 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B2635]/40"
                  placeholder="Traditional Wear"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Image URL</label>
                <input
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-black/10 bg-white/80 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B2635]/40"
                  placeholder="https://..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-black/10 bg-white/80 px-3 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-[#8B2635]/40"
                  placeholder="Short description for the collection."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-[#2C2C2C] text-white font-semibold hover:bg-[#1a1a1a] transition-colors"
              >
                Add Collection
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">New items appear in the Home and Footer sections after you add them.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCollections;
