# Recipe: Reduce File Complexity

Target hotspot: `components/ContactForm.tsx`
(complexity 1.0, centrality 0.6)

1. Read dependents: `grep -n 'components/ContactForm.tsx' readmenator-agent/ARCHITECTURE*.md`
2. Extract functions/classes into new files in the same subsystem
3. Update imports
4. Regenerate: `readmenator .`
