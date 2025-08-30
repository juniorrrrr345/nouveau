import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h2 className="text-4xl font-bold mb-4">404 - Page non trouvée</h2>
      <p className="text-lg mb-8">Désolé, la page que vous recherchez n'existe pas.</p>
      <Link 
        href="/"
        className="rounded-lg bg-blue-500 px-5 py-3 text-white transition-colors hover:bg-blue-600"
      >
        Retour à l'accueil
      </Link>
    </div>
  )
}