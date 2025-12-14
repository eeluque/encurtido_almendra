import Hero from "../components/Hero";

export default function Contact() {
    return (
        <>
            <div className="bg-fuchsia-100 rounded-xl shadow-lg border-2 p-10 m-10">
                <h1 className="italic">Quienes somos</h1>
                <p className="text-justify">Somos una pequeña empresa independiente y familiar, nacida del sueño y el trabajo conjunto de un matrimonio apasionado por la buena comida y los sabores tradicionales. Desde nuestra cocina, elaboramos encurtidos artesanales que resaltan lo mejor de cada ingrediente.

                    Nos especializamos en cebolla encurtida, jalapeños y repollo, preparados cuidadosamente con sabores naturales, sin procesos industriales ni atajos. Creemos que la calidad comienza con la selección de ingredientes frescos y de primera, y continúa con recetas simples que respetan su esencia.

                    Cada frasco que producimos refleja nuestro compromiso con el sabor, la autenticidad y el trabajo hecho con dedicación. No somos una gran fábrica: somos una familia que pone corazón en cada preparación, buscando llevar a tu mesa productos honestos, llenos de carácter y perfectos para realzar cualquier comida.

                    Gracias por apoyar lo local, lo artesanal y lo hecho con amor.</p>
            </div>
            <Hero />
        </>
    )
}