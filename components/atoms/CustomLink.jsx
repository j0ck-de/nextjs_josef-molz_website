import Link from "next/link";

export default function CustomLink({ url, children }) {
  return <Link href={url}>{children}</Link>;
}
