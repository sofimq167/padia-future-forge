import React, { useState, useEffect } from "react";
import AdminLogin from "./AdminLogin";
import { useAdmin, Member, Project } from "@/contexts/AdminContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const MembersAdmin: React.FC = () => {
  const { members, addMember, updateMember, deleteMember } = useAdmin();
  const [edit, setEdit] = useState<{ [id: string]: Partial<Member> }>({});

  function handleChange(id: string, field: keyof Member, value: string) {
    setEdit((prev) => ({ ...prev, [id]: { ...prev[id], [field]: value } }));
  }
  function handleSave(id: string) {
    updateMember(id, edit[id] || {});
    setEdit((prev) => ({ ...prev, [id]: {} }));
  }

  return (
    <div className="space-y-6">
      <Button onClick={addMember}>Añadir integrante</Button>
      {members.length === 0 && <p>No hay integrantes aún.</p>}
      {members.map((m) => {
        const local = { ...m, ...edit[m.id] };
        const dirty = !!edit[m.id] && Object.keys(edit[m.id]!).length > 0;
        return (
          <div key={m.id} className="border p-4 rounded-lg space-y-2">
            <div>
              <Label htmlFor={`name-${m.id}`}>Nombre</Label>
              <Input
                id={`name-${m.id}`}
                value={local.name}
                onChange={(e) => handleChange(m.id, "name", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor={`role-${m.id}`}>Rol / Cargo</Label>
              <Input
                id={`role-${m.id}`}
                value={local.role || ""}
                onChange={(e) => handleChange(m.id, "role", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor={`linkedin-${m.id}`}>LinkedIn</Label>
              <Input
                id={`linkedin-${m.id}`}
                value={local.linkedin || ""}
                onChange={(e) => handleChange(m.id, "linkedin", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor={`photo-${m.id}`}>URL foto</Label>
              <Input
                id={`photo-${m.id}`}
                value={local.photo || ""}
                onChange={(e) => handleChange(m.id, "photo", e.target.value)}
              />
            </div>
            <div className="flex justify-end gap-2">
              {dirty && (
                <Button variant="default" onClick={() => handleSave(m.id)}>
                  Guardar
                </Button>
              )}
              <Button variant="destructive" onClick={() => deleteMember(m.id)}>
                Eliminar
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ProjectsAdmin: React.FC = () => {
  const { projects, addProject, updateProject, deleteProject } = useAdmin();
  const [edit, setEdit] = useState<{ [id: string]: Partial<Project> }>({});

  function handleChange(id: string, field: keyof Project, value: string) {
    setEdit((prev) => ({ ...prev, [id]: { ...prev[id], [field]: value } }));
  }
  function handleSave(id: string) {
    // Special: split technologies
    let changes = { ...edit[id] };
    if (typeof changes.technologies === "string") {
      changes.technologies = (changes.technologies as string)
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s);
    }
    updateProject(id, changes);
    setEdit((prev) => ({ ...prev, [id]: {} }));
  }

  return (
    <div className="space-y-6">
      <Button onClick={addProject}>Añadir proyecto</Button>
      {projects.length === 0 && <p>No hay proyectos aún.</p>}
      {projects.map((p) => {
        const local = { ...p, ...edit[p.id] };
        const dirty = !!edit[p.id] && Object.keys(edit[p.id]!).length > 0;
        return (
          <div key={p.id} className="border p-4 rounded-lg space-y-2">
            <div>
              <Label htmlFor={`title-${p.id}`}>Título</Label>
              <Input
                id={`title-${p.id}`}
                value={local.title}
                onChange={(e) => handleChange(p.id, "title", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor={`status-${p.id}`}>Estado</Label>
              <Input
                id={`status-${p.id}`}
                value={local.status}
                onChange={(e) => handleChange(p.id, "status", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor={`tech-${p.id}`}>Lenguajes (separados por comas)</Label>
              <Input
                id={`tech-${p.id}`}
                value={typeof local.technologies === "string" ? local.technologies : local.technologies.join(", ")}
                onChange={(e) => handleChange(p.id, "technologies", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor={`more-${p.id}`}>Enlace "Ver más"</Label>
              <Input
                id={`more-${p.id}`}
                value={local.moreLink || ""}
                onChange={(e) => handleChange(p.id, "moreLink", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor={`github-${p.id}`}>Enlace GitHub</Label>
              <Input
                id={`github-${p.id}`}
                value={local.githubLink || ""}
                onChange={(e) => handleChange(p.id, "githubLink", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor={`desc-${p.id}`}>Descripción</Label>
              <Textarea
                id={`desc-${p.id}`}
                value={local.description || ""}
                onChange={(e) => handleChange(p.id, "description", e.target.value)}
              />
            </div>
            <div className="flex justify-end gap-2">
              {dirty && (
                <Button variant="default" onClick={() => handleSave(p.id)}>
                  Guardar
                </Button>
              )}
              <Button variant="destructive" onClick={() => deleteProject(p.id)}>
                Eliminar
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Admin: React.FC = () => {
  const [authed, setAuthed] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("padia_admin_auth") === "1") setAuthed(true);
  }, []);

  if (!authed) {
    return <AdminLogin onLogin={() => setAuthed(true)} />;
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-3xl font-bold mb-6">Panel de administración</h1>
      <Accordion type="multiple" className="w-full max-w-2xl mx-auto">
        <AccordionItem value="integrantes">
          <AccordionTrigger>Integrantes del Semillero</AccordionTrigger>
          <AccordionContent>
            <MembersAdmin />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="proyectos">
          <AccordionTrigger>Proyectos Destacados</AccordionTrigger>
          <AccordionContent>
            <ProjectsAdmin />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Admin;
