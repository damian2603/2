import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"
import { Hammer, Paintbrush, Wrench, Home, Mail, Phone, MapPin, Check } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 flex flex-col">
        <div className="flex h-24 justify-center flex-row -mb-[3px] flex-grow-0 px-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F9649f019a6db4c7da0368b6fb83919c8%2Fc5490c0f835a4aafae6bb39c038f395d?format=webp&width=800"
            alt="REM-TOP Logo"
            className="h-[182px] w-auto self-stretch -mt-[35px] mr-auto ml-0 pl-[113px]"
          />
          <div className="hidden md:flex gap-[57px] justify-start items-center mr-auto">
            <Link href="#home" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              Strona główna
            </Link>
            <Link href="#uslugi" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              Usługi
            </Link>
            <Link href="#galeria" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              Galeria
            </Link>
            <Link href="#kontakt" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-zinc-800 py-24 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnpNNiA0NGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              Kompleksowe wykończenie i remont mieszkań
            </h1>
            <p className="mb-8 text-xl text-zinc-300">
              Profesjonalne usługi remontowe z gwarancją jakości. Od projektu po klucz - zrealizujemy Twoje marzenia o idealnym wnętrzu.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <Phone className="mr-2 h-5 w-5" />
                <p><span style={{fontSize: "14px"}}>Zobacz realizacje</span></p>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 transition-all hover:border-accent hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-white">
                  <Check className="h-6 w-6" />
                </div>
                <CardTitle>Gwarancja jakości</CardTitle>
                <CardDescription>
                  Wszystkie prace wykonujemy z najwyższą starannością i dbałością o detale
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 transition-all hover:border-accent hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-white">
                  <Wrench className="h-6 w-6" />
                </div>
                <CardTitle>Doświadczony zespół</CardTitle>
                <CardDescription>
                  Nasi specjaliści posiadają wieloletnie doświadczenie w branży remontowej
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 transition-all hover:border-accent hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-white">
                  <Home className="h-6 w-6" />
                </div>
                <CardTitle>Kompleksowa obsługa</CardTitle>
                <CardDescription>
                  Od projektu przez realizację aż po końcowe sprzątanie - wszystko w jednym miejscu
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Nasze usługi</h2>
            <p className="text-lg text-muted-foreground">
              Oferujemy szeroki zakres usług remontowo-wykończeniowych w konkurencyjnych cenach
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle>Cennik usług</CardTitle>
                <CardDescription>Ceny są orientacyjne i mogą się różnić w zależności od zakresu prac</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-2/3">Usługa</TableHead>
                      <TableHead className="text-right">Cena od (zł/m²)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Malowanie ścian i sufitów</TableCell>
                      <TableCell className="text-right">25 zł</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Układanie glazury i terakoty</TableCell>
                      <TableCell className="text-right">80 zł</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Gładzie gipsowe</TableCell>
                      <TableCell className="text-right">35 zł</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Montaż paneli podłogowych</TableCell>
                      <TableCell className="text-right">40 zł</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Zabudowy z płyt GK</TableCell>
                      <TableCell className="text-right">90 zł</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Prace hydrauliczne</TableCell>
                      <TableCell className="text-right">150 zł/pkt</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Instalacje elektryczne</TableCell>
                      <TableCell className="text-right">120 zł/pkt</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Kompleksowe wykończenie</TableCell>
                      <TableCell className="text-right">450 zł</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Paintbrush className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Prace malarskie</CardTitle>
                  <CardDescription>
                    Malowanie ścian, sufitów, szpachlowanie, gładzie
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Wrench className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle className="text-xl">Instalacje</CardTitle>
                  <CardDescription>
                    Hydraulika, elektryka, klimatyzacja, ogrzewanie
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Galeria realizacji</h2>
            <p className="text-lg text-muted-foreground">
              Zobacz nasze najnowsze projekty i przekonaj się o jakości naszej pracy
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden transition-all hover:shadow-xl">
                <div className="aspect-video bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Home className="mx-auto h-12 w-12 mb-2 opacity-50" />
                    <p className="text-sm">Zdjęcie {item}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold">Projekt {item}</h3>
                  <p className="text-sm text-muted-foreground">Kompleksowe wykończenie mieszkania</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="bg-black py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Skontaktuj się z nami</h2>
            <p className="text-lg text-zinc-300">
              Jesteśmy do Twojej dyspozycji - zadzwoń lub napisz
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="bg-zinc-900 border-zinc-800 text-white">
                <CardHeader>
                  <CardTitle className="text-white">Dane kontaktowe</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-400">Telefon</p>
                      <p className="font-semibold">+48 123 456 789</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-400">Email</p>
                      <p className="font-semibold">kontakt@remontpro.pl</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-zinc-400">Adres</p>
                      <p className="font-semibold">ul. Przykładowa 123<br />00-000 Warszawa</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">Napisz do nas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Imię i nazwisko"
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Wiadomość"
                      rows={4}
                      className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-accent focus:outline-none"
                    />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Wyślij wiadomość
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-zinc-50 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 RemontPro. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  )
}
