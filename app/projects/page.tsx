import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionCard from "@/components/SectionCard";
import StatusBadge from "@/components/StatusBadge";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title="專案清單"
        description="所有待交接專案的狀態、產出、接手責任及開放問題。"
      />

      <div className="space-y-4">
        {projects.map((project) => (
          <SectionCard key={project.id}>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-base font-semibold text-slate-900">{project.title}</h2>
                  <StatusBadge status={project.status} />
                  <StatusBadge status={project.priority} />
                </div>
                <p className="mt-1 text-sm text-slate-600">{project.objective}</p>
              </div>
              {project.detailHref && (
                <Link
                  href={project.detailHref}
                  className="shrink-0 text-xs font-medium text-blue-700 border border-blue-300 rounded px-3 py-1.5 hover:bg-blue-50 transition-colors whitespace-nowrap"
                >
                  查看交接頁
                </Link>
              )}
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">目前產出</div>
                <p className="text-sm text-slate-700">{project.output}</p>
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">接手者</div>
                <p className="text-sm text-slate-500 italic">{project.successor}</p>
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">交接備註</div>
                <p className="text-sm text-slate-700">{project.handoverNotes}</p>
              </div>
            </div>

            {project.openIssues.length > 0 && (
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">開放問題</div>
                <ul className="space-y-1">
                  {project.openIssues.map((issue, i) => (
                    <li key={i} className="text-xs text-slate-600 flex gap-2">
                      <span className="text-slate-300 shrink-0">—</span>
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.keyFiles.length > 0 && (
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">重要連結</div>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {project.keyFiles.map((file, i) => (
                    <span key={i} className="text-xs text-slate-400 italic">
                      {file.label}: {file.url}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </SectionCard>
        ))}
      </div>
    </div>
  );
}
