import { FileText, Download, ExternalLink } from "lucide-react";

interface DocumentCardProps {
  title: string;
  description?: string;
  href: string;
  type?: "pdf" | "image";
}

export default function DocumentCard({
  title,
  description,
  href,
  type = "pdf",
}: DocumentCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover group flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-blue/30 hover:shadow-blue/10"
    >
      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-blue/10 flex items-center justify-center group-hover:bg-blue/20 transition-colors">
        <FileText size={22} className="text-blue" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-navy leading-snug group-hover:text-blue transition-colors">
          {title}
        </p>
        {description && (
          <p className="mt-1 text-xs text-slate-500 leading-relaxed">{description}</p>
        )}
        <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-blue/70">
          {type === "pdf" ? (
            <>
              <Download size={11} />
              Descargar PDF
            </>
          ) : (
            <>
              <ExternalLink size={11} />
              Ver documento
            </>
          )}
        </span>
      </div>
    </a>
  );
}
