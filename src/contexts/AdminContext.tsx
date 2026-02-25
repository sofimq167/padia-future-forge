import React, { createContext, useContext, useEffect, useState } from "react";

export interface Member {
  id: string;
  name: string;
  linkedin?: string;
  photo?: string;
  role?: string;
}

export interface Project {
  id: string;
  title: string;
  description?: string;
  status: string;
  technologies: string[];
  moreLink?: string;
  githubLink?: string;
}

interface AdminContextType {
  members: Member[];
  projects: Project[];
  addMember: () => void;
  updateMember: (id: string, changes: Partial<Member>) => void;
  deleteMember: (id: string) => void;
  addProject: () => void;
  updateProject: (id: string, changes: Partial<Project>) => void;
  deleteProject: (id: string) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

// default data copied from the hardcoded sections
const defaultMembers: Member[] = [
  { id: crypto.randomUUID(), name: "Giovanny Hidalgo Suarez", role: "Director", linkedin: "https://www.linkedin.com/in/giovanny-hidalgo-suarez-95711b1a5/" },
  { id: crypto.randomUUID(), name: "Mariana Cruz", role: "Lider célula 1", linkedin: "https://www.linkedin.com/in/mariana-cruz-53a8531b0/" },
  { id: crypto.randomUUID(), name: "Sofia Valencia", role: "Lider célula 2", linkedin: "https://www.linkedin.com/in/sofia-valencia-solano-66022a345/" },
  { id: crypto.randomUUID(), name: "Lilian Estefania Maradiago Correa", linkedin: "https://www.linkedin.com/in/lilian-estefania-maradiago-correa-40b423244/" },
  { id: crypto.randomUUID(), name: "Valeria Rudas Ruiz", linkedin: "https://www.linkedin.com/in/valeria-rudas-ruiz-941a0715b/" },
  { id: crypto.randomUUID(), name: "Juan Sebastián Dosman Bastidas", linkedin: "https://www.linkedin.com/in/sebastiandosman/" },
  { id: crypto.randomUUID(), name: "Gustavo Adolfo Camargo Pineda", linkedin: "https://www.linkedin.com/in/gustavoadolfocamargopineda/" },
  { id: crypto.randomUUID(), name: "Dillan Alexander Asprilla Sánchez", linkedin: "https://www.linkedin.com/in/dillanasprilla/" },
  { id: crypto.randomUUID(), name: "Carlos Andrés Serrato Echeverry", linkedin: "https://www.linkedin.com/in/carlos-andres-serrato-echeverry/" },
  { id: crypto.randomUUID(), name: "Nicolas Ramirez Villota", linkedin: "https://www.linkedin.com/in/nicolasdlp/" },
  { id: crypto.randomUUID(), name: "Juan David Díaz Cerón", linkedin: "https://www.linkedin.com/in/juan-david-díaz-cerón-272416265/" },
  { id: crypto.randomUUID(), name: "Jhonatan Andrés Ortega Caicedo" },
  { id: crypto.randomUUID(), name: "Valerie Sofia Olave Pineda", linkedin: "https://www.linkedin.com/in/valerie-olave-3a1929350/" },
  { id: crypto.randomUUID(), name: "Natalia Giraldo Amador", linkedin: "https://www.linkedin.com/in/natalia-giraldo-432076256/" },
  { id: crypto.randomUUID(), name: "Sofia Moreno Quintero", linkedin: "https://www.linkedin.com/in/sofia-moreno-3a3249272/" },
  { id: crypto.randomUUID(), name: "Juan Pablo Bustamante Bermúdez", linkedin: "https://www.linkedin.com/in/jpbustamanteb/" },
  { id: crypto.randomUUID(), name: "Kevin Alexis López Camacho", linkedin: "https://www.linkedin.com/in/kevin-lópez-7a19b8369/" },
  { id: crypto.randomUUID(), name: "Bylen Yesid Naspiran Realpe", linkedin: "https://www.linkedin.com/in/bylenyesidnaspiranrealpe/" },
  { id: crypto.randomUUID(), name: "Maria José Ramirez Montero", linkedin: "https://www.linkedin.com/in/maria-jose-ramirez-montero-8b45052b3/" },
  { id: crypto.randomUUID(), name: "Nicolas Hernandez Rodriguez" },
  { id: crypto.randomUUID(), name: "Samuel Vargas Valderruten" },
  { id: crypto.randomUUID(), name: "Fernanda Elizabeth Muñoz Cháves" },
  { id: crypto.randomUUID(), name: "Valeria Becerra Rendón" },
  { id: crypto.randomUUID(), name: "Samuel Mejia Chavarriaga" },
  { id: crypto.randomUUID(), name: "Sofía Acosta Escobar" },
];

const defaultProjects: Project[] = [
  {
    id: crypto.randomUUID(),
    title: 'Sistema de Predicciónes',
    description: 'Modelo de machine learning para predicción de deserción estudiantil utilizando técnicas avanzadas de IA.',
    technologies: ['Python', 'TensorFlow', 'Pandas'],
    status: 'En desarrollo',
  },
  {
    id: crypto.randomUUID(),
    title: 'Dashboard Analítico',
    description: 'Plataforma de visualización de datos académicos en tiempo real para la toma de decisiones.',
    technologies: ['React', 'D3.js', 'Node.js'],
    status: 'Completado',
  },
  {
    id: crypto.randomUUID(),
    title: 'Chatbot Universitario',
    description: 'Asistente virtual con procesamiento de lenguaje natural para consultas académicas.',
    technologies: ['Python', 'NLP', 'FastAPI'],
    status: 'En desarrollo',
  },
  {
    id: crypto.randomUUID(),
    title: 'Análisis de Sentimientos',
    description: 'Herramienta de análisis de opiniones en redes sociales usando deep learning.',
    technologies: ['Python', 'BERT', 'PyTorch'],
    status: 'Investigación',
  },
];

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [members, setMembers] = useState<Member[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  // load from localStorage or fallback to defaults
  useEffect(() => {
    try {
      const m = localStorage.getItem('admin_members');
      if (m) {
        setMembers(JSON.parse(m));
      } else {
        setMembers(defaultMembers);
      }
    } catch {
      setMembers(defaultMembers);
    }

    try {
      const p = localStorage.getItem('admin_projects');
      if (p) {
        setProjects(JSON.parse(p));
      } else {
        setProjects(defaultProjects);
      }
    } catch {
      setProjects(defaultProjects);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('admin_members', JSON.stringify(members));
  }, [members]);

  useEffect(() => {
    localStorage.setItem('admin_projects', JSON.stringify(projects));
  }, [projects]);

  const addMember = () => {
    setMembers((prev) => [...prev, { id: crypto.randomUUID(), name: '', role: '', linkedin: '', photo: '' }]);
  };

  const updateMember = (id: string, changes: Partial<Member>) => {
    setMembers((prev) => prev.map((m) => (m.id === id ? { ...m, ...changes } : m)));
  };

  const deleteMember = (id: string) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  const addProject = () => {
    setProjects((prev) => [...prev, { id: crypto.randomUUID(), title: '', status: '', technologies: [] }]);
  };

  const updateProject = (id: string, changes: Partial<Project>) => {
    setProjects((prev) => prev.map((p) => (p.id === id ? { ...p, ...changes } : p)));
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <AdminContext.Provider
      value={{
        members,
        projects,
        addMember,
        updateMember,
        deleteMember,
        addProject,
        updateProject,
        deleteProject,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = (): AdminContextType => {
  const ctx = useContext(AdminContext);
  if (!ctx) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return ctx;
};
