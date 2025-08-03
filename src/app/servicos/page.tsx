"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState('ecommerce')

  const services = [
    {
      id: 'ecommerce',
      title: "Desenvolvimento de E-commerces",
      shortDescription: "Lojas virtuais completas com integração WhatsApp",
      fullDescription: "Desenvolvemos lojas virtuais personalizadas e otimizadas para conversão, com design responsivo, sistema de pagamentos seguros, gestão de estoque automatizada e integração direta com WhatsApp para facilitar o atendimento ao cliente. Nossas soluções incluem painel administrativo completo, relatórios de vendas, sistema de cupons e muito mais.",
      icon: "🛒",
      features: ["Integração WhatsApp", "Design Responsivo", "Pagamentos Seguros", "Gestão de Estoque", "Painel Admin", "SEO Otimizado"],
      technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "WhatsApp API"],
      portfolioExamples: [
        {
          title: "Loja de Moda Feminina",
          description: "E-commerce completo com catálogo de produtos, carrinho de compras e checkout integrado",
          image: "/images/fashion-ecommerce.png",
          features: ["Catálogo de Produtos", "Filtros Avançados", "Checkout Rápido", "Integração WhatsApp"]
        },
        {
          title: "Marketplace de Eletrônicos",
          description: "Plataforma multi-vendor com sistema de avaliações e comparação de preços",
          image: "/images/eletronicos-ecommerce.png",
          features: ["Multi-vendor", "Sistema de Avaliações", "Comparação de Preços", "Chat Integrado"]
        },
        {
          title: "Loja de Produtos Artesanais",
          description: "E-commerce especializado em produtos únicos com storytelling da marca",
          image: "/images/produtos-artesanais.png",
          features: ["Storytelling", "Galeria de Produtos", "Blog Integrado", "Programa de Fidelidade"]
        }
      ]
    },
    {
      id: 'chatbot',
      title: "Chatbot Inteligente",
      shortDescription: "IA conversacional para atendimento 24/7",
      fullDescription: "Implementamos chatbots inteligentes powered by IA que compreendem linguagem natural e fornecem respostas precisas aos seus clientes. Nossos bots aprendem continuamente, integram-se com seus sistemas existentes e podem escalar automaticamente para WhatsApp, Facebook Messenger, site e outras plataformas.",
      icon: "🤖",
      features: ["IA Avançada", "Atendimento 24/7", "Integração Multi-plataforma", "Analytics Detalhado", "Aprendizado Contínuo", "Escalabilidade"],
      technologies: ["OpenAI GPT", "Python", "Node.js", "WebSocket", "WhatsApp API", "Telegram API"],
      portfolioExamples: [
        {
          title: "Assistente Virtual para E-commerce",
          description: "Chatbot que auxilia clientes com dúvidas sobre produtos, pedidos e suporte técnico",
          image: "/images/assistente-virtual.png",
          features: ["Consulta de Produtos", "Rastreamento de Pedidos", "Suporte Técnico", "Recomendações IA"]
        },
        {
          title: "Bot de Agendamento Médico",
          description: "Sistema automatizado para agendamento de consultas e lembretes",
          image: "/images/assistente-medico.png",
          features: ["Agendamento Automático", "Lembretes SMS", "Integração Calendário", "Histórico Médico"]
        },
        {
          title: "Assistente Financeiro",
          description: "Chatbot para consultas bancárias, investimentos e educação financeira",
          image: "/images/assistente-financeiro.png",
          features: ["Consultas Bancárias", "Dicas de Investimento", "Educação Financeira", "Análise de Gastos"]
        }
      ]
    },
    {
      id: 'landing',
      title: "Landing Pages Estratégicas",
      shortDescription: "Páginas de alta conversão para campanhas",
      fullDescription: "Criamos landing pages otimizadas para conversão com design persuasivo, copywriting estratégico, testes A/B integrados e analytics avançados. Cada página é desenvolvida com foco no objetivo específico da campanha, seja captura de leads, vendas ou engajamento.",
      icon: "📈",
      features: ["Alta Conversão", "SEO Otimizado", "A/B Testing", "Analytics Integrado", "Design Persuasivo", "Mobile First"],
      technologies: ["Next.js", "React", "Tailwind CSS", "Google Analytics", "Hotjar", "Mailchimp"],
      portfolioExamples: [
        {
          title: "Landing Page para Curso Online",
          description: "Página de vendas com vídeo de apresentação, depoimentos e formulário de inscrição",
          image: "/images/curso-online.png",
          features: ["Vídeo Sales Letter", "Depoimentos", "Countdown Timer", "Formulário Otimizado"]
        },
        {
          title: "Página de Captura para Webinar",
          description: "Landing focada em inscrições para webinar com agenda automática",
          image: "/images/webinar.png",
          features: ["Formulário de Inscrição", "Integração Calendário", "Email Automático", "Página de Confirmação"]
        },
        {
          title: "Landing para Lançamento de Produto",
          description: "Página de pré-venda com lista de espera e notificações automáticas",
          image: "/images/lançamento.png",
          features: ["Lista de Espera", "Notificações Push", "Galeria de Produtos", "Social Proof"]
        }
      ]
    },
    {
      id: 'institutional',
      title: "Plataformas Institucionais",
      shortDescription: "Sites corporativos profissionais",
      fullDescription: "Desenvolvemos sites institucionais completos que transmitem credibilidade e profissionalismo. Incluem apresentação da empresa, serviços, equipe, cases de sucesso, blog corporativo e área de contato otimizada. Todos os sites são responsivos, otimizados para SEO e com CMS personalizado.",
      icon: "🏢",
      features: ["Design Profissional", "CMS Personalizado", "Multi-idioma", "Otimização SEO", "Blog Integrado", "Área Restrita"],
      technologies: ["Next.js", "React", "Strapi CMS", "PostgreSQL", "Cloudinary", "Vercel"],
      portfolioExamples: [
        {
          title: "Site para Escritório de Advocacia",
          description: "Portal institucional com áreas de atuação, equipe e blog jurídico",
          image: "/images/advogado.png",
          features: ["Áreas de Atuação", "Perfil da Equipe", "Blog Jurídico", "Formulário de Contato"]
        },
        {
          title: "Portal para Clínica Médica",
          description: "Site com especialidades, agendamento online e área do paciente",
          image: "/images/medica.png",
          features: ["Especialidades Médicas", "Agendamento Online", "Área do Paciente", "Convênios"]
        },
        {
          title: "Site para Empresa de Consultoria",
          description: "Portal corporativo com cases, metodologia e área de recursos",
          image: "/images/consultoria.png",
          features: ["Cases de Sucesso", "Metodologia", "Recursos Gratuitos", "Área de Parceiros"]
        }
      ]
    },
    {
      id: 'campaigns',
      title: "Sites de Campanhas Publicitárias",
      shortDescription: "Páginas promocionais e temporárias",
      fullDescription: "Criamos sites promocionais e temporários para campanhas específicas, eventos, lançamentos e datas comemorativas. Focamos em design impactante, carregamento rápido, integração com redes sociais e métricas em tempo real para acompanhar o desempenho da campanha.",
      icon: "🎯",
      features: ["Deploy Rápido", "Design Impactante", "Métricas em Tempo Real", "Integração Social", "Otimização Mobile", "Countdown Timers"],
      technologies: ["Next.js", "React", "Framer Motion", "Google Analytics", "Facebook Pixel", "Vercel"],
      portfolioExamples: [
        {
          title: "Campanha Black Friday",
          description: "Site promocional com ofertas limitadas e countdown em tempo real",
          image: "/images/blackfriday.png",
          features: ["Ofertas Limitadas", "Countdown Timer", "Cupons de Desconto", "Compartilhamento Social"]
        },
        {
          title: "Lançamento de Produto",
          description: "Página de pré-lançamento com especificações e reservas antecipadas",
          image: "/images/ultimo.png",
          features: ["Especificações Técnicas", "Reserva Antecipada", "Galeria Interativa", "Comparativo"]
        },
        {
          title: "Evento Corporativo",
          description: "Site para evento com programação, palestrantes e inscrições",
          image: "/images/evento.png",
          features: ["Programação", "Perfil Palestrantes", "Inscrições Online", "Networking"]
        }
      ]
    }
  ]

  const currentService = services.find(service => service.id === selectedService) || services[0]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-white">FOSARA</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-cyan-400 transition-colors">Início</Link>
              <Link href="/servicos" className="text-cyan-400">Serviços</Link>
              <Link href="/#about" className="hover:text-cyan-400 transition-colors">Sobre</Link>
              <Link href="/#testimonials" className="hover:text-cyan-400 transition-colors">Depoimentos</Link>
              <Link href="/#contact" className="hover:text-cyan-400 transition-colors">Contato</Link>
            </div>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0">
              <Link href="/#contact">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Serviços</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore nossas soluções tecnológicas avançadas com exemplos reais de projetos desenvolvidos para nossos clientes.
          </p>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-8 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {services.map((service) => (
              <Button
                key={service.id}
                variant={selectedService === service.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedService(service.id)}
                className={selectedService === service.id 
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0" 
                  : "border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                }
              >
                {service.icon} {service.title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Service Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="text-6xl mb-6">{currentService.icon}</div>
                <h2 className="text-3xl font-bold mb-4 text-cyan-400">{currentService.title}</h2>
                <p className="text-gray-300 mb-6 leading-relaxed">{currentService.fullDescription}</p>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-white">Principais Recursos</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentService.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3 text-white">Tecnologias Utilizadas</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentService.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="border-gray-600 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0">
                  <Link href="/#contact">Solicitar Orçamento</Link>
                </Button>
              </div>
            </div>

            {/* Portfolio Examples */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {currentService.portfolioExamples.map((example, index) => (
                  <Card key={index} className="bg-gray-900/50 border-gray-700 overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={example.image} 
                        alt={example.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-white">{example.title}</CardTitle>
                      <CardDescription className="text-gray-300">{example.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {example.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/30">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border-t border-cyan-500/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para começar seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">projeto</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e vamos transformar sua ideia em realidade digital com soluções personalizadas e inovadoras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 px-8 py-3 text-lg">
              <Link href="/#contact">Solicitar Orçamento</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 text-lg">
              <a href="https://wa.me/5514998965284" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5514998965284"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <span className="text-2xl">💬</span>
      </a>
    </div>
  )
}
