/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [servico, setServico] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const numeroWhatsApp = '5514998965284' // Coloque aqui seu número com DDI e DDD
    const texto = `Olá, me chamo *${nome}*.\n\nTenho interesse no serviço de *${servico}*.\n\n*Mensagem:* ${mensagem}\n\n*Email:* ${email}`
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`

    window.open(url, '_blank')
  }

  const services = [
    {
      id: 1,
      title: "Desenvolvimento de E-commerces",
      description: "Criação de lojas virtuais personalizadas para diversos segmentos, com botão de redirecionamento direto para o WhatsApp, facilitando o contato e impulsionando as vendas.",
      icon: "🛒",
      features: ["Integração WhatsApp", "Design Responsivo", "Pagamentos Seguros", "Gestão de Estoque"]
    },
    {
      id: 2,
      title: "Chatbot Inteligente",
      description: "Implementação de ChatBots personalizados para sites, que respondem automaticamente dúvidas frequentes de clientes, otimizando o atendimento e reduzindo a carga operacional.",
      icon: "🤖",
      features: ["IA Avançada", "Atendimento 24/7", "Integração Multi-plataforma", "Analytics Detalhado"]
    },
    {
      id: 3,
      title: "Landing Pages Estratégicas",
      description: "Criação de páginas de captura e conversão voltadas para aumentar o alcance da sua marca, atrair leads e promover produtos ou serviços de forma objetiva e eficaz.",
      icon: "📈",
      features: ["Alta Conversão", "SEO Otimizado", "A/B Testing", "Analytics Integrado"]
    },
    {
      id: 4,
      title: "Plataformas Institucionais",
      description: "Desenvolvimento de sites institucionais empresariais completos, que apresentam serviços, soluções, valores e diferenciais da sua empresa de forma clara e profissional.",
      icon: "🏢",
      features: ["Design Profissional", "CMS Personalizado", "Multi-idioma", "Otimização SEO"]
    },
    {
      id: 5,
      title: "Sites de Campanhas Publicitárias",
      description: "Criação de sites promocionais e temporários para divulgação de eventos, campanhas, lançamentos de produtos ou datas comemorativas, com foco em conversão e engajamento.",
      icon: "🎯",
      features: ["Deploy Rápido", "Design Impactante", "Métricas em Tempo Real", "Integração Social"]
    },
    {
      id: 6,
      title: "Integrações Financeiras",
      description: "Implementação de integrações com sistemas como Serasa, SPC, bancos e outros, para oferecer soluções completas que envolvem validação de crédito, análise de risco e outros serviços financeiros.",
      icon: "🔗",
      features: ["APIs Bancárias", "Validação de Crédito", "Segurança Avançada", "Compliance"]
    },
    {
      id: 7,
      title: "Linktree Personalizado",
      description: "Criação de uma plataforma de links personalizados, semelhante ao Linktree, com mais funcionalidades e identidade visual personalizada para a sua marca.",
      icon: "🌐",
      features: ["Design Customizado", "Analytics Avançado", "QR Code", "Integração Social"]
    },
    {
      id: 8,
      title: "Treinamento de IA",
      description: "Desenvolvimento e aplicação de IA personalizada para empresas: automatização de processos internos, suporte com dicas de vendas, comportamento do consumidor e treinamentos estratégicos.",
      icon: "🧠",
      features: ["IA Personalizada", "Automação de Processos", "Análise Preditiva", "Treinamento Contínuo"]
    },
    {
      id: 9,
      title: "Conteúdo para Redes Sociais",
      description: "Pacotes de conteúdo sob medida para Instagram, Facebook e marketplaces, com publicações planejadas, vídeos, animações e copywriting otimizado.",
      icon: "📦",
      features: ["Conteúdo Estratégico", "Design Profissional", "Calendário Editorial", "Métricas de Engajamento"]
    },
    {
      id: 10,
      title: "Identidade Visual & Mídia Kit",
      description: "Desenvolvimento completo da identidade visual da marca, incluindo logotipo, paleta de cores, tipografia, manual da marca e mídia kit personalizado.",
      icon: "🎨",
      features: ["Branding Completo", "Manual da Marca", "Mídia Kit", "Aplicações Diversas"]
    }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      company: "TechStart Ltda",
      text: "A FOSARA transformou nossa presença digital. O e-commerce desenvolvido aumentou nossas vendas em 300% no primeiro trimestre.",
      rating: 5
    },
    {
      name: "João Santos",
      company: "Inovação Corp",
      text: "O chatbot inteligente revolucionou nosso atendimento. Reduzimos o tempo de resposta em 80% e melhoramos a satisfação do cliente.",
      rating: 5
    },
    {
      name: "Ana Costa",
      company: "Digital Solutions",
      text: "As landing pages criadas pela FOSARA geraram um aumento de 250% na captação de leads. Profissionalismo excepcional!",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="text-white">FOSARA</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Início</a>
              <Link href="/servicos" className="hover:text-cyan-400 transition-colors">Serviços</Link>
              <a href="#about" className="hover:text-cyan-400 transition-colors">Sobre</a>
              <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Depoimentos</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contato</a>
            </div>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0">
              <a href="#contact">Fale Conosco</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.1)_0%,transparent_50%)]"></div>

        <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            {/* <div className="inline-block p-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 mb-6">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                FOSARA
              </div>
            </div> */}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Soluções Tecnológicas
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Avançadas
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transformamos ideias em realidade digital. Especializados em desenvolvimento web,
            inteligência artificial e soluções inovadoras para impulsionar seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 px-8 py-3 text-lg">
              <Link href="/servicos">Conheça Nossos Serviços</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg">
              <a href="#contact">Fale Conosco</a>
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Serviços</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Oferecemos soluções completas e personalizadas para transformar sua presença digital
              e impulsionar o crescimento do seu negócio.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0">
              <Link href="/servicos">Ver Todos os Serviços</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <Card key={service.id} className={`bg-gray-900/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sobre a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">FOSARA</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Somos uma empresa de tecnologia especializada em soluções digitais inovadoras.
                Nossa missão é transformar ideias em realidade através de tecnologias avançadas
                e estratégias personalizadas.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Com expertise em desenvolvimento web, inteligência artificial e marketing digital,
                ajudamos empresas de todos os portes a alcançar seus objetivos no mundo digital.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-lg border border-cyan-500/20">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
                  <div className="text-gray-300">Projetos Entregues</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-lg border border-cyan-500/20">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg p-8 border border-cyan-500/30">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Nossos Valores</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Inovação</h4>
                      <p className="text-gray-300">Sempre buscamos as tecnologias mais avançadas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Qualidade</h4>
                      <p className="text-gray-300">Excelência em cada projeto desenvolvido</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Parceria</h4>
                      <p className="text-gray-300">Construímos relacionamentos duradouros</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              O que nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">clientes</span> dizem
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Veja os resultados que alcançamos para nossos parceiros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-cyan-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Contato</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pronto para transformar sua presença digital? Vamos conversar sobre seu projeto!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                    <span className="text-cyan-400 text-xl">📧</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-gray-300">fosaratechnology@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                    <span className="text-cyan-400 text-xl">📱</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">WhatsApp</div>
                    <div className="text-gray-300">(14)99896-5284</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-cyan-500/30">
                    <span className="text-cyan-400 text-xl">📍</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Localização</div>
                    <div className="text-gray-300">Presidente Prudente, Brasil</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/fosaratechnology/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
                      Instagram
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-lg p-8 border border-cyan-500/30">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Solicite um Orçamento</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                  <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Serviço de Interesse</label>
                  <select value={servico} onChange={(e) => setServico(e.target.value)} required className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white">
                    <option value="">Selecione um serviço</option>
                    <option>E-commerce</option>
                    <option>Chatbot</option>
                    <option>Landing Page</option>
                    <option>Site Institucional</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                  <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} required rows={4} className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white resize-none"></textarea>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 py-3">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-white">FOSARA</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transformando ideias em realidade digital através de soluções tecnológicas inovadoras.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/servicos" className="hover:text-cyan-400 transition-colors">E-commerce</Link></li>
                <li><Link href="/servicos" className="hover:text-cyan-400 transition-colors">Chatbots</Link></li>
                <li><Link href="/servicos" className="hover:text-cyan-400 transition-colors">Landing Pages</Link></li>
                <li><Link href="/servicos" className="hover:text-cyan-400 transition-colors">Sites Institucionais</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">Sobre</a></li>
                <li><Link href="/servicos" className="hover:text-cyan-400 transition-colors">Serviços</Link></li>
                <li><a href="#testimonials" className="hover:text-cyan-400 transition-colors">Depoimentos</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>fosaratechnology@gmail.com</li>
                <li>14 99896-5284</li>
                <li>São Paulo, Brasil</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 FOSARA. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5514998965284"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  )
}
