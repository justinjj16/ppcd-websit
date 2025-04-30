import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("@/components/PDFViewer"), {
  ssr: false,
});

export default function PDFPage() {
  return <PDFViewer fileUrl="/doc/pdf/mcb-Health-Fair-2025-Flyer.pdf" />;
}
