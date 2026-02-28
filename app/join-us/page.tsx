import { Header } from "@/components/header"
import { JoinUsSection } from "@/components/join-us-section"
import { Footer } from "@/components/footer"

export const revalidate = 3600

export default function JoinUsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <JoinUsSection />
            <Footer />
        </main>
    )
}