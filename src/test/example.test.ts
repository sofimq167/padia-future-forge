import React from 'react';
import { describe, it, expect } from "vitest";
import { render, act } from '@testing-library/react';
import { AdminProvider, useAdmin } from '../contexts/AdminContext';

// small components for testing
const MemberTester: React.FC = () => {
  const ctx = useAdmin();
  return (
    <div>
      <span data-testid="member-count">{ctx.members.length}</span>
      <button
        data-testid="add-member"
        onClick={() => ctx.addMember()}
      >add</button>
      <button
        data-testid="delete-member"
        onClick={() => ctx.deleteMember(ctx.members[0]?.id || '')}
      >del</button>
    </div>
  );
};

const ProjectTester: React.FC = () => {
  const ctx = useAdmin();
  return (
    <div>
      <span data-testid="project-count">{ctx.projects.length}</span>
      <button
        data-testid="add-project"
        onClick={() => ctx.addProject()}
      >add</button>
      <button
        data-testid="delete-project"
        onClick={() => ctx.deleteProject(ctx.projects[0]?.id || '')}
      >del</button>
    </div>
  );
};

describe("AdminContext", () => {
  it("mutates members through provider", () => {
    const { getByTestId } = render(
      <AdminProvider>
        <MemberTester />
      </AdminProvider>
    );

    const countSpan = getByTestId("member-count");
    const initial = Number(countSpan.textContent);

    act(() => {
      getByTestId("add-member").click();
    });
    expect(Number(countSpan.textContent)).toBe(initial + 1);

    act(() => {
      getByTestId("delete-member").click();
    });
    expect(Number(countSpan.textContent)).toBe(initial);
  });

  it("mutates projects through provider", () => {
    const { getByTestId } = render(
      <AdminProvider>
        <ProjectTester />
      </AdminProvider>
    );

    const countSpan = getByTestId("project-count");
    const initial = Number(countSpan.textContent);

    act(() => {
      getByTestId("add-project").click();
    });
    expect(Number(countSpan.textContent)).toBe(initial + 1);

    act(() => {
      getByTestId("delete-project").click();
    });
    expect(Number(countSpan.textContent)).toBe(initial);
  });
});
