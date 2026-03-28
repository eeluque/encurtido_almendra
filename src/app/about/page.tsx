import Link from "next/link";

export default function About() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold tracking-tight text-foreground">Acerca de</h1>
      <p className="mt-4 text-muted-foreground">
        Esta página está en construcción. Conocé nuestra historia en{" "}
        <Link href="/contact" className="font-semibold text-primary underline-offset-4 hover:underline">
          Quiénes somos
        </Link>
        .
      </p>
    </div>
  );
}
