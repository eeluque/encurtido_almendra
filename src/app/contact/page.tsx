import Hero from "../components/Hero";

export default function Contact() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <article className="rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-10">
          <h1 className="text-3xl font-bold tracking-tight text-card-foreground">
            Quiénes somos
          </h1>
          <div className="prose prose-neutral mt-6 max-w-none text-pretty text-muted-foreground prose-p:leading-relaxed prose-p:text-muted-foreground">
            <p>
              Somos una pequeña empresa independiente y familiar, nacida del sueño y el trabajo
              conjunto de un matrimonio apasionado por la buena comida y los sabores tradicionales.
              Desde nuestra cocina, elaboramos encurtidos artesanales que resaltan lo mejor de cada
              ingrediente.
            </p>
            <p>
              Nos especializamos en cebolla encurtida, jalapeños y repollo, preparados cuidadosamente
              con sabores naturales, sin procesos industriales ni atajos. Creemos que la calidad
              comienza con la selección de ingredientes frescos y de primera, y continúa con recetas
              simples que respetan su esencia.
            </p>
            <p>
              Cada frasco que producimos refleja nuestro compromiso con el sabor, la autenticidad y
              el trabajo hecho con dedicación. No somos una gran fábrica: somos una familia que pone
              corazón en cada preparación, buscando llevar a tu mesa productos honestos, llenos de
              carácter y perfectos para realzar cualquier comida.
            </p>
            <p className="font-medium text-card-foreground">
              Gracias por apoyar lo local, lo artesanal y lo hecho con amor.
            </p>
          </div>
        </article>
      </div>
      <Hero />
    </>
  );
}
