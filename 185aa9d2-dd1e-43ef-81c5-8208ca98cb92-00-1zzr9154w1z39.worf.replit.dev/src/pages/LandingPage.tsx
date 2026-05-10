import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/LandingPage.tsx");"use strict";
import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=59c858e9"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=59c858e9"; const useState = __vite__cjsImport1_react["useState"]; const useEffect = __vite__cjsImport1_react["useEffect"];
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=59c858e9";
import {
  Building2,
  Car,
  Briefcase,
  TrendingUp,
  ShieldCheck,
  Users,
  ChevronRight,
  MapPin,
  Clock,
  Phone,
  Menu,
  X
} from "/node_modules/.vite/deps/lucide-react.js?v=59c858e9";
import { FaWhatsapp, FaInstagram, FaFacebook } from "/node_modules/.vite/deps/react-icons_fa.js?v=59c858e9";
import { Button } from "/src/components/ui/button.tsx";
import logo from "/@fs/home/runner/workspace/attached_assets/logo1_1778394177107.png?import";
import logoNavbar from "/@fs/home/runner/workspace/attached_assets/ChatGPT_Image_10_de_mai._de_2026,_03_48_28_1778395715543.png?import";
import storeFront from "/@fs/home/runner/workspace/attached_assets/40b39f0b-a750-4c15-9928-34b0ecc8f785_1778394689258.png?import";
import managerPhoto from "/@fs/home/runner/workspace/attached_assets/9f6af9bd-d862-4cc4-8789-f1e20b566d85_1778394685745.png?import";
const WHATSAPP_LINK = "https://wa.me/5541989999999";
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};
export default function LandingPage() {
  _s();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:57:4", "data-component-name": "div", className: "min-h-screen bg-white text-slate-900 font-sans", children: [
    /* @__PURE__ */ jsxDEV("header", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:59:6", "data-component-name": "header", className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3" : "bg-white py-5"}`, children: [
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:60:8", "data-component-name": "div", className: "container mx-auto px-4 md:px-6 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:61:10", "data-component-name": "div", className: "flex items-center gap-2 cursor-pointer", onClick: () => scrollTo("inicio"), children: /* @__PURE__ */ jsxDEV("img", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:62:12", "data-component-name": "img", src: logoNavbar, alt: "Equipe Cerbelo - Ademicon", className: "h-14 md:h-16 object-contain" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("nav", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:66:10", "data-component-name": "nav", className: "hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700", children: [
          /* @__PURE__ */ jsxDEV("button", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:67:12", "data-component-name": "button", onClick: () => scrollTo("inicio"), className: "hover:text-primary transition-colors", children: "Início" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 67,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("button", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:68:12", "data-component-name": "button", onClick: () => scrollTo("solucoes"), className: "hover:text-primary transition-colors", children: "Soluções" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 68,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("button", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:69:12", "data-component-name": "button", onClick: () => scrollTo("diferenciais"), className: "hover:text-primary transition-colors", children: "Por que Nós" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 69,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("button", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:70:12", "data-component-name": "button", onClick: () => scrollTo("gestor"), className: "hover:text-primary transition-colors", children: "Gestor" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 70,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("button", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:71:12", "data-component-name": "button", onClick: () => scrollTo("depoimentos"), className: "hover:text-primary transition-colors", children: "Depoimentos" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("button", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:72:12", "data-component-name": "button", onClick: () => scrollTo("loja"), className: "hover:text-primary transition-colors", children: "Localização" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:75:10", "data-component-name": "div", className: "hidden lg:block", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:76:12", "data-component-name": "Button", asChild: true, className: "bg-green-600 hover:bg-green-700 text-white gap-2 font-semibold", children: /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:77:14", "data-component-name": "a", href: WHATSAPP_LINK, target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsxDEV(FaWhatsapp, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:78:16", "data-component-name": "FaWhatsapp", className: "text-lg" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 78,
            columnNumber: 17
          }, this),
          "Falar com um Consultor"
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:85:10",
            "data-component-name": "button",
            className: "lg:hidden p-2 text-slate-600",
            onClick: () => setMobileMenuOpen(!mobileMenuOpen),
            children: mobileMenuOpen ? /* @__PURE__ */ jsxDEV(X, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:89:30", "data-component-name": "X" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 89,
              columnNumber: 31
            }, this) : /* @__PURE__ */ jsxDEV(Menu, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:89:38", "data-component-name": "Menu" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 89,
              columnNumber: 141
            }, this)
          },
          void 0,
          false,
          {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 85,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      mobileMenuOpen && /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:95:10", "data-component-name": "div", className: "lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-lg py-4 px-4 flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxDEV("button", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:96:12", "data-component-name": "button", onClick: () => scrollTo("inicio"), className: "text-left font-medium p-2 hover:bg-slate-50 rounded-md", children: "Início" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("button", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:97:12", "data-component-name": "button", onClick: () => scrollTo("solucoes"), className: "text-left font-medium p-2 hover:bg-slate-50 rounded-md", children: "Soluções" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("button", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:98:12", "data-component-name": "button", onClick: () => scrollTo("diferenciais"), className: "text-left font-medium p-2 hover:bg-slate-50 rounded-md", children: "Por que Nós" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 98,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("button", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:99:12", "data-component-name": "button", onClick: () => scrollTo("gestor"), className: "text-left font-medium p-2 hover:bg-slate-50 rounded-md", children: "Gestor" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("button", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:100:12", "data-component-name": "button", onClick: () => scrollTo("loja"), className: "text-left font-medium p-2 hover:bg-slate-50 rounded-md", children: "Localização" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:101:12", "data-component-name": "Button", asChild: true, className: "w-full bg-green-600 hover:bg-green-700 text-white gap-2 mt-2", children: /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:102:14", "data-component-name": "a", href: WHATSAPP_LINK, target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsxDEV(FaWhatsapp, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:103:16", "data-component-name": "FaWhatsapp", className: "text-lg" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 103,
            columnNumber: 17
          }, this),
          "Falar com um Consultor"
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 102,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 101,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:112:6", "data-component-name": "section", id: "inicio", className: "pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden bg-accent text-white", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:113:8", "data-component-name": "div", className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:114:10", "data-component-name": "div", className: "absolute inset-0 bg-gradient-to-r from-accent via-accent/90 to-transparent z-10" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV("img", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:115:10", "data-component-name": "img", src: storeFront, alt: "Fachada Ademicon Piraquara", className: "w-full h-full object-cover opacity-30 object-right" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 115,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:118:8", "data-component-name": "div", className: "container mx-auto px-4 md:px-6 relative z-20", children: /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:119:10",
          "data-component-name": "motion.div",
          initial: "hidden",
          animate: "visible",
          variants: staggerContainer,
          className: "max-w-3xl",
          children: [
            /* @__PURE__ */ jsxDEV(motion.div, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:125:12", "data-component-name": "motion.div", variants: fadeInUp, className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6", children: [
              /* @__PURE__ */ jsxDEV(ShieldCheck, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:126:14", "data-component-name": "ShieldCheck", className: "w-4 h-4 text-secondary" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 126,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:127:14", "data-component-name": "span", children: "Unidade Ademicon Piraquara • Atendimento consultivo • Planejamento personalizado" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 127,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 125,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(motion.h1, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:130:12", "data-component-name": "motion.h1", variants: fadeInUp, className: "text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6", children: [
              "Planeje seu futuro com ",
              /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:131:37", "data-component-name": "span", className: "text-secondary", children: "segurança" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 131,
                columnNumber: 38
              }, this),
              " através da Ademicon Piraquara"
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 130,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(motion.p, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:134:12", "data-component-name": "motion.p", variants: fadeInUp, className: "text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed", children: "Soluções inteligentes em consórcio e investimento para quem deseja conquistar imóveis, veículos e patrimônio com estratégia." }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 134,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(motion.div, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:138:12", "data-component-name": "motion.div", variants: fadeInUp, className: "flex flex-col sm:flex-row gap-4", children: [
              /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:139:14", "data-component-name": "Button", asChild: true, size: "lg", className: "bg-green-600 hover:bg-green-700 text-white h-14 px-8 text-base font-semibold w-full sm:w-auto", children: /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:140:16", "data-component-name": "a", href: WHATSAPP_LINK, target: "_blank", rel: "noopener noreferrer", children: [
                /* @__PURE__ */ jsxDEV(FaWhatsapp, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:141:18", "data-component-name": "FaWhatsapp", className: "text-xl mr-2" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                  lineNumber: 141,
                  columnNumber: 19
                }, this),
                "Simular agora pelo WhatsApp"
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 140,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 139,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:145:14", "data-component-name": "Button", asChild: true, variant: "outline", size: "lg", className: "h-14 px-8 text-base font-semibold w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white", children: /* @__PURE__ */ jsxDEV("button", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:146:16", "data-component-name": "button", onClick: () => scrollTo("loja"), children: "Conhecer a unidade" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 146,
                columnNumber: 17
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 145,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 138,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 119,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:156:6", "data-component-name": "section", id: "instagram", className: "py-16 bg-white border-b border-slate-100", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:157:8", "data-component-name": "div", className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:158:10",
          "data-component-name": "motion.div",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-100px" },
          variants: staggerContainer,
          className: "text-center mb-10",
          children: [
            /* @__PURE__ */ jsxDEV(motion.div, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:165:12", "data-component-name": "motion.div", variants: fadeInUp, className: "flex items-center justify-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxDEV(FaInstagram, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:166:14", "data-component-name": "FaInstagram", className: "text-2xl text-pink-500" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 166,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:167:14",
                  "data-component-name": "a",
                  href: "https://www.instagram.com/ademiconpiraquara/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-lg font-semibold text-slate-700 hover:text-pink-500 transition-colors",
                  children: "@ademiconpiraquara"
                },
                void 0,
                false,
                {
                  fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                  lineNumber: 167,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 165,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(motion.h2, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:176:12", "data-component-name": "motion.h2", variants: fadeInUp, className: "text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3", children: "Acompanhe a Equipe Cerbelo" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 176,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(motion.p, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:179:12", "data-component-name": "motion.p", variants: fadeInUp, className: "text-slate-500 max-w-xl mx-auto", children: "Fique por dentro das novidades, dicas de investimento e conquistas dos nossos clientes." }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 179,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 158,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:184:10",
          "data-component-name": "motion.div",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-80px" },
          variants: staggerContainer,
          className: "grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4",
          children: [
            {
              bg: "from-[#0D1B2A] via-[#1a2f45] to-[#C9A84C]",
              tag: "Consórcio de Imóveis",
              text: "Realize o sonho da casa própria com planejamento e sem juros. Fale com um de nossos consultores hoje mesmo.",
              likes: "234",
              time: "2 dias atrás",
              icon: /* @__PURE__ */ jsxDEV(Building2, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:198:22", "data-component-name": "Building2", className: "w-8 h-8 text-[#C9A84C]" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 198,
                columnNumber: 21
              }, this)
            },
            {
              bg: "from-[#E8001D] via-[#b5001a] to-[#0D1B2A]",
              tag: "Consórcio de Veículos",
              text: "Seu próximo carro pode ser adquirido de forma inteligente. Consórcio Ademicon: sem entrada, sem juros.",
              likes: "189",
              time: "4 dias atrás",
              icon: /* @__PURE__ */ jsxDEV(Car, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:206:22", "data-component-name": "Car", className: "w-8 h-8 text-white" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 206,
                columnNumber: 21
              }, this)
            },
            {
              bg: "from-[#C9A84C] via-[#a07c30] to-[#0D1B2A]",
              tag: "Planejamento Patrimonial",
              text: "Crescimento patrimonial com estratégia. A Equipe Cerbelo te ajuda a conquistar mais com menos risco.",
              likes: "312",
              time: "5 dias atrás",
              icon: /* @__PURE__ */ jsxDEV(TrendingUp, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:214:22", "data-component-name": "TrendingUp", className: "w-8 h-8 text-white" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 214,
                columnNumber: 21
              }, this)
            },
            {
              bg: "from-[#0D1B2A] via-[#162336] to-[#E8001D]",
              tag: "Dica Financeira",
              text: "Você sabia que o consórcio é uma das formas mais seguras de investimento no Brasil? Autorizado pelo BACEN.",
              likes: "421",
              time: "1 semana atrás",
              icon: /* @__PURE__ */ jsxDEV(ShieldCheck, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:222:22", "data-component-name": "ShieldCheck", className: "w-8 h-8 text-[#C9A84C]" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 222,
                columnNumber: 21
              }, this)
            },
            {
              bg: "from-[#1a2f45] via-[#0D1B2A] to-[#C9A84C]",
              tag: "Equipe Cerbelo",
              text: "Nossa equipe está pronta para transformar seus objetivos em conquistas reais. Agende uma consultoria gratuita.",
              likes: "278",
              time: "1 semana atrás",
              icon: /* @__PURE__ */ jsxDEV(Users, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:230:22", "data-component-name": "Users", className: "w-8 h-8 text-[#C9A84C]" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 230,
                columnNumber: 21
              }, this)
            },
            {
              bg: "from-[#E8001D] via-[#0D1B2A] to-[#C9A84C]",
              tag: "Unidade Piraquara",
              text: "Estamos em Piraquara/PR prontos para te atender. Venha nos visitar na R. Barão do Cerro Azul, 1869.",
              likes: "156",
              time: "2 semanas atrás",
              icon: /* @__PURE__ */ jsxDEV(MapPin, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:238:22", "data-component-name": "MapPin", className: "w-8 h-8 text-white" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 238,
                columnNumber: 21
              }, this)
            }
          ].map(
            (post, i) => /* @__PURE__ */ jsxDEV(
              motion.a,
              {
                "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:241:14",
                "data-component-name": "motion.a",
                href: "https://www.instagram.com/ademiconpiraquara/",
                target: "_blank",
                rel: "noopener noreferrer",
                variants: fadeInUp,
                className: "group relative aspect-square rounded-xl overflow-hidden cursor-pointer block",
                "data-testid": `card-instagram-${i}`,
                children: [
                  /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:250:16", "data-component-name": "div", className: `absolute inset-0 bg-gradient-to-br ${post.bg}` }, void 0, false, {
                    fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                    lineNumber: 250,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:251:16", "data-component-name": "div", className: "absolute inset-0 flex flex-col justify-between p-4 md:p-5", children: [
                    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:252:18", "data-component-name": "div", className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:253:20", "data-component-name": "span", className: "text-xs font-bold text-white/80 uppercase tracking-wider bg-black/20 px-2 py-1 rounded-full", children: post.tag }, void 0, false, {
                        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                        lineNumber: 253,
                        columnNumber: 21
                      }, this),
                      post.icon
                    ] }, void 0, true, {
                      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                      lineNumber: 252,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:258:18", "data-component-name": "div", children: [
                      /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:259:20", "data-component-name": "p", className: "text-white text-xs md:text-sm leading-snug line-clamp-3 mb-2 font-medium drop-shadow", children: post.text }, void 0, false, {
                        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                        lineNumber: 259,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:262:20", "data-component-name": "div", className: "flex items-center justify-between text-white/60 text-xs", children: [
                        /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:263:22", "data-component-name": "span", children: [
                          "♥ ",
                          post.likes,
                          " curtidas"
                        ] }, void 0, true, {
                          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                          lineNumber: 263,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:264:22", "data-component-name": "span", children: post.time }, void 0, false, {
                          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                          lineNumber: 264,
                          columnNumber: 23
                        }, this)
                      ] }, void 0, true, {
                        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                        lineNumber: 262,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, true, {
                      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                      lineNumber: 258,
                      columnNumber: 19
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                    lineNumber: 251,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:268:16", "data-component-name": "div", className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(FaInstagram, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:269:18", "data-component-name": "FaInstagram", className: "text-white text-4xl opacity-0 group-hover:opacity-80 transition-opacity duration-300" }, void 0, false, {
                    fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                    lineNumber: 269,
                    columnNumber: 19
                  }, this) }, void 0, false, {
                    fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                    lineNumber: 268,
                    columnNumber: 17
                  }, this)
                ]
              },
              i,
              true,
              {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 241,
                columnNumber: 13
              },
              this
            )
          )
        },
        void 0,
        false,
        {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 184,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:275:10",
          "data-component-name": "motion.div",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true },
          variants: fadeInUp,
          className: "text-center mt-8",
          children: /* @__PURE__ */ jsxDEV(
            "a",
            {
              "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:282:12",
              "data-component-name": "a",
              href: "https://www.instagram.com/ademiconpiraquara/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-pink-400 text-pink-500 font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300",
              "data-testid": "link-instagram-profile",
              children: [
                /* @__PURE__ */ jsxDEV(FaInstagram, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:289:14", "data-component-name": "FaInstagram", className: "text-lg" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                  lineNumber: 289,
                  columnNumber: 15
                }, this),
                "Ver todos os posts no Instagram"
              ]
            },
            void 0,
            true,
            {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 282,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        false,
        {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 275,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
      lineNumber: 157,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
      lineNumber: 156,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:297:6", "data-component-name": "section", className: "py-16 bg-slate-50 border-b border-slate-200", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:298:8", "data-component-name": "div", className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxDEV(
      motion.div,
      {
        "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:299:10",
        "data-component-name": "motion.div",
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        variants: staggerContainer,
        className: "flex flex-col lg:flex-row items-center gap-12",
        children: [
          /* @__PURE__ */ jsxDEV(motion.div, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:306:12", "data-component-name": "motion.div", variants: fadeInUp, className: "lg:w-1/3 w-full flex justify-center", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:307:14", "data-component-name": "div", className: "relative w-full max-w-xs", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:309:16", "data-component-name": "div", className: "absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#C9A84C] via-[#E8001D] to-[#C9A84C] opacity-40 blur-sm" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 309,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:310:16", "data-component-name": "div", className: "relative bg-gradient-to-b from-[#0D1B2A] to-[#162336] rounded-3xl border border-[#C9A84C]/40 overflow-hidden shadow-2xl", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:312:18", "data-component-name": "div", className: "flex justify-center pt-8 pb-4 px-6", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:313:20", "data-component-name": "div", className: "rounded-2xl overflow-hidden shadow-lg ring-2 ring-[#C9A84C]/20", children: /* @__PURE__ */ jsxDEV("img", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:314:22", "data-component-name": "img", src: logo, alt: "Equipe Cerbelo - Ademicon Piraquara", className: "w-56 object-contain block" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 314,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 313,
                columnNumber: 21
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 312,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:318:18", "data-component-name": "div", className: "mx-6 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 318,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:320:18", "data-component-name": "div", className: "flex items-center justify-center gap-3 py-5 px-6", children: [
                /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:321:20", "data-component-name": "span", className: "text-4xl font-bold text-white tracking-tight", children: "4,3" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                  lineNumber: 321,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:322:20", "data-component-name": "div", className: "flex flex-col gap-0.5", children: [
                  /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:323:22", "data-component-name": "div", className: "flex text-amber-400 text-xl", children: [
                    "★★★★".split("").map((star, i) => /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:324:59", "data-component-name": "span", children: star }, i, false, {
                      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                      lineNumber: 324,
                      columnNumber: 60
                    }, this)),
                    /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:325:24", "data-component-name": "span", className: "opacity-30", children: "★" }, void 0, false, {
                      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                      lineNumber: 325,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                    lineNumber: 323,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:327:22", "data-component-name": "span", className: "text-xs font-semibold text-[#C9A84C] uppercase tracking-wider", children: "no Google • 15 avaliações" }, void 0, false, {
                    fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                    lineNumber: 327,
                    columnNumber: 23
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                  lineNumber: 322,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 320,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 310,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 307,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 306,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:334:12", "data-component-name": "div", className: "lg:w-2/3 w-full grid grid-cols-1 sm:grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxDEV(motion.div, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:335:14", "data-component-name": "motion.div", variants: fadeInUp, className: "text-center sm:text-left border-l-2 border-primary/20 pl-6", children: [
              /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:336:16", "data-component-name": "h3", className: "text-3xl font-serif font-bold text-accent mb-2", children: "Mais de 30" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 336,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:337:16", "data-component-name": "p", className: "text-sm text-slate-600 font-medium", children: "Anos Ademicon no mercado" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 337,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 335,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(motion.div, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:339:14", "data-component-name": "motion.div", variants: fadeInUp, className: "text-center sm:text-left border-l-2 border-primary/20 pl-6", children: [
              /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:340:16", "data-component-name": "h3", className: "text-3xl font-serif font-bold text-accent mb-2", children: "+15" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 340,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:341:16", "data-component-name": "p", className: "text-sm text-slate-600 font-medium", children: "Consultores especializados" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 341,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 339,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV(motion.div, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:343:14", "data-component-name": "motion.div", variants: fadeInUp, className: "text-center sm:text-left border-l-2 border-primary/20 pl-6", children: [
              /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:344:16", "data-component-name": "h3", className: "text-3xl font-serif font-bold text-accent mb-2", children: "100%" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 344,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:345:16", "data-component-name": "p", className: "text-sm text-slate-600 font-medium", children: "Das cotas com BACEN" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 345,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 343,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 334,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
        lineNumber: 299,
        columnNumber: 11
      },
      this
    ) }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
      lineNumber: 298,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
      lineNumber: 297,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:353:6", "data-component-name": "section", id: "solucoes", className: "py-24 bg-white", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:354:8", "data-component-name": "div", className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:355:10", "data-component-name": "div", className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:356:12", "data-component-name": "h2", className: "text-sm font-bold tracking-wider text-primary uppercase mb-3", children: "Nossas Soluções" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 356,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:357:12", "data-component-name": "h3", className: "text-3xl md:text-4xl font-serif font-bold text-accent mb-6", children: "Planejamento feito para sua realidade" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 357,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:360:12", "data-component-name": "p", className: "text-slate-600 text-lg", children: "Oferecemos linhas de consórcio estruturadas para ampliação de patrimônio sem pagar juros abusivos." }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 360,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
        lineNumber: 355,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:365:10",
          "data-component-name": "motion.div",
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-100px" },
          variants: staggerContainer,
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
          children: [
            {
              icon: /* @__PURE__ */ jsxDEV(Building2, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:374:22", "data-component-name": "Building2", className: "w-8 h-8 text-primary" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 374,
                columnNumber: 21
              }, this),
              title: "Consórcio de Imóveis",
              desc: "Compre, construa ou reforme seu imóvel residencial ou comercial de forma planejada e sem juros."
            },
            {
              icon: /* @__PURE__ */ jsxDEV(Car, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:379:22", "data-component-name": "Car", className: "w-8 h-8 text-primary" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 379,
                columnNumber: 21
              }, this),
              title: "Consórcio de Veículos",
              desc: "Adquira carros, motos ou veículos pesados novos ou seminovos com prazos e parcelas flexíveis."
            },
            {
              icon: /* @__PURE__ */ jsxDEV(Briefcase, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:384:22", "data-component-name": "Briefcase", className: "w-8 h-8 text-primary" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 384,
                columnNumber: 21
              }, this),
              title: "Consórcio de Serviços",
              desc: "Realize viagens, cirurgias, festas ou pague estudos através de cartas de crédito planejadas."
            },
            {
              icon: /* @__PURE__ */ jsxDEV(TrendingUp, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:389:22", "data-component-name": "TrendingUp", className: "w-8 h-8 text-primary" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 389,
                columnNumber: 21
              }, this),
              title: "Investimento Patrimonial",
              desc: "Use o consórcio como alavancagem financeira para criar renda passiva e multiplicar seu capital."
            }
          ].map(
            (sol, i) => /* @__PURE__ */ jsxDEV(motion.div, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:394:14", "data-component-name": "motion.div", variants: fadeInUp, className: "group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-primary/20 flex flex-col h-full", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:395:16", "data-component-name": "div", className: "w-16 h-16 rounded-xl bg-red-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300", children: sol.icon }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 395,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("h4", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:398:16", "data-component-name": "h4", className: "text-xl font-bold text-accent mb-3", children: sol.title }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 398,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:399:16", "data-component-name": "p", className: "text-slate-600 mb-6 leading-relaxed flex-grow", children: sol.desc }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 399,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:400:16", "data-component-name": "a", href: WHATSAPP_LINK, target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center font-semibold text-primary hover:text-accent transition-colors mt-auto", children: [
                "Saiba mais ",
                /* @__PURE__ */ jsxDEV(ChevronRight, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:401:29", "data-component-name": "ChevronRight", className: "w-4 h-4 ml-1" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                  lineNumber: 401,
                  columnNumber: 30
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 400,
                columnNumber: 17
              }, this)
            ] }, i, true, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 394,
              columnNumber: 13
            }, this)
          )
        },
        void 0,
        false,
        {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 365,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
      lineNumber: 354,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
      lineNumber: 353,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:410:6", "data-component-name": "section", id: "diferenciais", className: "py-24 bg-accent text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:411:8", "data-component-name": "div", className: "absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-accent to-accent opacity-50" }, void 0, false, {
        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
        lineNumber: 411,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:413:8", "data-component-name": "div", className: "container mx-auto px-4 md:px-6 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:414:10", "data-component-name": "div", className: "flex flex-col lg:flex-row gap-16 items-center", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:415:12", "data-component-name": "div", className: "lg:w-1/2", children: /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:416:14",
            "data-component-name": "motion.div",
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true },
            variants: fadeInUp,
            children: [
              /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:422:16", "data-component-name": "h2", className: "text-sm font-bold tracking-wider text-secondary uppercase mb-3", children: "O Diferencial Equipe Cerbelo" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 422,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:423:16", "data-component-name": "h3", className: "text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight", children: "Não vendemos cotas. Desenhamos o seu futuro." }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 423,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:426:16", "data-component-name": "p", className: "text-slate-300 text-lg mb-8 leading-relaxed", children: "Na Ademicon Piraquara, você encontra um ambiente consultivo onde seu projeto de vida é o centro da estratégia. A Equipe Cerbelo é reconhecida pela transparência e pelo acompanhamento do início até a contemplação." }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 426,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:430:16", "data-component-name": "div", className: "space-y-6", children: [
                { title: "Atendimento Personalizado", desc: "Seu consultor entende seu fluxo de caixa antes de ofertar qualquer plano." },
                { title: "Consultores Certificados", desc: "Profissionais treinados para criar estratégias de alavancagem patrimonial reais." },
                { title: "Apoio Pós-Venda", desc: "Gestão completa do seu grupo e auxílio estratégico para lances nas assembleias." },
                { title: "Maior Rede do Brasil", desc: "Parceria com a Ademicon, a maior administradora independente do país." }
              ].map(
                (item, i) => /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:437:20", "data-component-name": "div", className: "flex gap-4", children: [
                  /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:438:22", "data-component-name": "div", className: "mt-1 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:439:24", "data-component-name": "div", className: "w-2 h-2 rounded-full bg-secondary" }, void 0, false, {
                    fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                    lineNumber: 439,
                    columnNumber: 25
                  }, this) }, void 0, false, {
                    fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                    lineNumber: 438,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:441:22", "data-component-name": "div", children: [
                    /* @__PURE__ */ jsxDEV("h4", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:442:24", "data-component-name": "h4", className: "text-lg font-bold text-white mb-1", children: item.title }, void 0, false, {
                      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                      lineNumber: 442,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:443:24", "data-component-name": "p", className: "text-slate-400", children: item.desc }, void 0, false, {
                      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                      lineNumber: 443,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, true, {
                    fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                    lineNumber: 441,
                    columnNumber: 23
                  }, this)
                ] }, i, true, {
                  fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                  lineNumber: 437,
                  columnNumber: 19
                }, this)
              ) }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 430,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 416,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 415,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:451:12", "data-component-name": "div", className: "lg:w-1/2 w-full", children: /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:452:14",
            "data-component-name": "motion.div",
            initial: { opacity: 0, scale: 0.95 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { duration: 0.6 },
            className: "relative rounded-2xl overflow-hidden shadow-2xl border border-white/10",
            children: [
              /* @__PURE__ */ jsxDEV("img", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:459:16", "data-component-name": "img", src: storeFront, alt: "Fachada Ademicon Piraquara", className: "w-full h-[500px] object-cover" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 459,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:460:16", "data-component-name": "div", className: "absolute inset-0 bg-gradient-to-t from-accent/90 to-transparent flex items-end p-8", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:461:18", "data-component-name": "div", children: [
                /* @__PURE__ */ jsxDEV("h4", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:462:20", "data-component-name": "h4", className: "text-2xl font-serif font-bold text-white mb-2", children: "Venha tomar um café conosco" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                  lineNumber: 462,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:463:20", "data-component-name": "p", className: "text-slate-300", children: "Nossa estrutura em Piraquara foi feita para te receber com conforto." }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                  lineNumber: 463,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 461,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 460,
                columnNumber: 17
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 452,
            columnNumber: 15
          },
          this
        ) }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 451,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
        lineNumber: 414,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
        lineNumber: 413,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
      lineNumber: 410,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:473:6", "data-component-name": "section", id: "gestor", className: "py-24 bg-slate-50", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:474:8", "data-component-name": "div", className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:475:10", "data-component-name": "div", className: "bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col md:flex-row", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:476:12", "data-component-name": "div", className: "md:w-5/12 relative", children: [
        /* @__PURE__ */ jsxDEV("img", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:477:14", "data-component-name": "img", src: managerPhoto, alt: "Gestor da Unidade", className: "w-full h-full object-cover min-h-[400px] object-top" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 477,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:478:14", "data-component-name": "div", className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-accent/90 to-transparent p-6 text-white md:hidden", children: [
          /* @__PURE__ */ jsxDEV("h4", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:479:16", "data-component-name": "h4", className: "text-xl font-bold", children: "Everton Cerbelo" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 479,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:480:16", "data-component-name": "p", className: "text-secondary font-medium", children: "Gestor Regional Ademicon" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 480,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 478,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
        lineNumber: 476,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:483:12", "data-component-name": "div", className: "md:w-7/12 p-8 md:p-16 flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:484:14", "data-component-name": "div", className: "hidden md:block mb-8", children: [
          /* @__PURE__ */ jsxDEV("h4", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:485:16", "data-component-name": "h4", className: "text-3xl font-serif font-bold text-accent mb-2", children: "Everton Cerbelo" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 485,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:486:16", "data-component-name": "p", className: "text-primary font-bold tracking-wide uppercase text-sm", children: "Gestor Regional Ademicon Piraquara" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 486,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 484,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("svg", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:489:14", "data-component-name": "svg", className: "w-12 h-12 text-slate-200 mb-6", fill: "currentColor", viewBox: "0 0 32 32", "aria-hidden": "true", children: /* @__PURE__ */ jsxDEV("path", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:490:16", "data-component-name": "path", d: "M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 490,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 489,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("blockquote", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:493:14", "data-component-name": "blockquote", className: "text-xl md:text-2xl font-serif text-slate-700 leading-relaxed mb-8 italic", children: '"Acreditamos que o planejamento é a ponte mais segura entre os seus sonhos de hoje e o seu patrimônio de amanhã. Nossa equipe não descansa até ver a sua chave na mão."' }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 493,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:497:14", "data-component-name": "div", children: /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:498:16", "data-component-name": "Button", asChild: true, size: "lg", className: "bg-accent hover:bg-accent/90 text-white", children: /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:499:18", "data-component-name": "a", href: WHATSAPP_LINK, target: "_blank", rel: "noopener noreferrer", children: "Falar com o Gestor" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 499,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 498,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 497,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
        lineNumber: 483,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
      lineNumber: 475,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
      lineNumber: 474,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
      lineNumber: 473,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:510:6", "data-component-name": "section", className: "py-24 bg-white", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:511:8", "data-component-name": "div", className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:512:10", "data-component-name": "div", className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:513:12", "data-component-name": "h2", className: "text-3xl md:text-4xl font-serif font-bold text-accent mb-6", children: "O caminho para a sua conquista" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 513,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:514:12", "data-component-name": "p", className: "text-slate-600 text-lg", children: "Um processo simples, transparente e guiado pela nossa equipe em cada etapa." }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 514,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
        lineNumber: 512,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:517:10", "data-component-name": "div", className: "grid grid-cols-1 md:grid-cols-4 gap-8 relative", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:518:12", "data-component-name": "div", className: "hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-slate-100 -translate-y-1/2 z-0" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 518,
          columnNumber: 13
        }, this),
        [
          { num: "01", title: "Consultoria", desc: "Análise do seu objetivo e capacidade financeira." },
          { num: "02", title: "Estratégia", desc: "Escolha do melhor grupo e plano de lances." },
          { num: "03", title: "Assembleia", desc: "Acompanhamento mensal para sorteios e lances." },
          { num: "04", title: "Conquista", desc: "Carta de crédito liberada. O bem é seu!" }
        ].map(
          (step, i) => /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:526:14", "data-component-name": "div", className: "relative z-10 flex flex-col items-center text-center", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:527:16", "data-component-name": "div", className: "w-16 h-16 rounded-full bg-white border-4 border-slate-50 shadow-md flex items-center justify-center text-xl font-bold text-primary mb-6 relative", children: [
              step.num,
              i < 3 && /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:529:28", "data-component-name": "div", className: "hidden md:block absolute w-full h-0.5 bg-primary/20 top-1/2 -right-full -translate-y-1/2 -z-10" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 529,
                columnNumber: 29
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 527,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("h4", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:531:16", "data-component-name": "h4", className: "text-xl font-bold text-accent mb-2", children: step.title }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 531,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:532:16", "data-component-name": "p", className: "text-slate-600", children: step.desc }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 532,
              columnNumber: 17
            }, this)
          ] }, i, true, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 526,
            columnNumber: 13
          }, this)
        )
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
        lineNumber: 517,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
      lineNumber: 511,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
      lineNumber: 510,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:540:6", "data-component-name": "section", id: "depoimentos", className: "py-24 bg-slate-50 border-t border-slate-200", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:541:8", "data-component-name": "div", className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:542:10", "data-component-name": "div", className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:543:12", "data-component-name": "h2", className: "text-3xl md:text-4xl font-serif font-bold text-accent mb-6", children: "Quem planeja, conquista" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 543,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:544:12", "data-component-name": "p", className: "text-slate-600 text-lg", children: "Histórias reais de clientes que confiaram na Ademicon Piraquara." }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 544,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
        lineNumber: 542,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:547:10", "data-component-name": "div", className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
        {
          text: "Tentamos financiamento e as taxas eram absurdas. A Equipe Cerbelo montou um plano perfeito para o nosso orçamento. Hoje estamos na nossa casa própria.",
          name: "Roberto e Mariana",
          loc: "Piraquara, PR",
          initials: "RM"
        },
        {
          text: "Uso o consórcio Ademicon como investimento há 5 anos. Sempre fui muito bem orientado pelo Anderson e equipe. A rentabilidade patrimonial é excelente.",
          name: "Carlos Eduardo",
          loc: "Pinhais, PR",
          initials: "CE"
        },
        {
          text: "Consegui trocar a frota da minha pequena empresa através de um grupo que o consultor me indicou. O lance foi certeiro. Atendimento nota 1000.",
          name: "Juliana Mendes",
          loc: "Piraquara, PR",
          initials: "JM"
        }
      ].map(
        (test, i) => /* @__PURE__ */ jsxDEV(
          motion.div,
          {
            "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:568:14",
            "data-component-name": "motion.div",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col",
            children: [
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:576:16", "data-component-name": "div", className: "flex text-amber-400 mb-6", children: "★★★★★".split("").map((s, idx) => /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:577:53", "data-component-name": "span", children: s }, idx, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 577,
                columnNumber: 54
              }, this)) }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 576,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:579:16", "data-component-name": "p", className: "text-slate-700 italic mb-8 min-h-[100px] flex-grow", children: [
                '"',
                test.text,
                '"'
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 579,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:580:16", "data-component-name": "div", className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:581:18", "data-component-name": "div", className: "w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold font-serif", children: test.initials }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                  lineNumber: 581,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:584:18", "data-component-name": "div", children: [
                  /* @__PURE__ */ jsxDEV("h5", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:585:20", "data-component-name": "h5", className: "font-bold text-accent", children: test.name }, void 0, false, {
                    fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                    lineNumber: 585,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:586:20", "data-component-name": "p", className: "text-sm text-slate-500", children: test.loc }, void 0, false, {
                    fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                    lineNumber: 586,
                    columnNumber: 21
                  }, this)
                ] }, void 0, true, {
                  fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                  lineNumber: 584,
                  columnNumber: 19
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 580,
                columnNumber: 17
              }, this)
            ]
          },
          i,
          true,
          {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 568,
            columnNumber: 13
          },
          this
        )
      ) }, void 0, false, {
        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
        lineNumber: 547,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
      lineNumber: 541,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
      lineNumber: 540,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:596:6", "data-component-name": "section", id: "loja", className: "py-24 bg-white", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:597:8", "data-component-name": "div", className: "container mx-auto px-4 md:px-6", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:598:10", "data-component-name": "div", className: "flex flex-col lg:flex-row gap-12 bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 shadow-sm", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:599:12", "data-component-name": "div", className: "lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center", children: [
        /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:600:14", "data-component-name": "h2", className: "text-sm font-bold tracking-wider text-primary uppercase mb-3", children: "Nossa Unidade" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 600,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:601:14", "data-component-name": "h3", className: "text-3xl md:text-4xl font-serif font-bold text-accent mb-8", children: "Venha nos fazer uma visita" }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 601,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:603:14", "data-component-name": "div", className: "space-y-6 mb-8", children: [
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:604:16", "data-component-name": "div", className: "flex gap-4", children: [
            /* @__PURE__ */ jsxDEV(MapPin, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:605:18", "data-component-name": "MapPin", className: "w-6 h-6 text-primary shrink-0 mt-1" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 605,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:606:18", "data-component-name": "div", children: [
              /* @__PURE__ */ jsxDEV("h4", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:607:20", "data-component-name": "h4", className: "font-bold text-slate-900", children: "Endereço" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 607,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:608:20", "data-component-name": "p", className: "text-slate-600 mt-1", children: [
                "R. Barão do Cerro Azul, 1869",
                /* @__PURE__ */ jsxDEV("br", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:608:83", "data-component-name": "br" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                  lineNumber: 608,
                  columnNumber: 187
                }, this),
                "Salas 16, 17 e 18 - Centro",
                /* @__PURE__ */ jsxDEV("br", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:608:114", "data-component-name": "br" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                  lineNumber: 608,
                  columnNumber: 323
                }, this),
                "Piraquara - PR, 83301-010"
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 608,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 606,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 604,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:612:16", "data-component-name": "div", className: "flex gap-4", children: [
            /* @__PURE__ */ jsxDEV(Clock, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:613:18", "data-component-name": "Clock", className: "w-6 h-6 text-primary shrink-0 mt-1" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 613,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:614:18", "data-component-name": "div", children: [
              /* @__PURE__ */ jsxDEV("h4", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:615:20", "data-component-name": "h4", className: "font-bold text-slate-900", children: "Horário de Atendimento" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 615,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:616:20", "data-component-name": "p", className: "text-slate-600 mt-1", children: [
                "Segunda a Sexta: 08:00 – 18:00",
                /* @__PURE__ */ jsxDEV("br", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:616:85", "data-component-name": "br" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                  lineNumber: 616,
                  columnNumber: 189
                }, this),
                "Sábado: 08:00 – 12:00"
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 616,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 614,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 612,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:620:16", "data-component-name": "div", className: "flex gap-4", children: [
            /* @__PURE__ */ jsxDEV(Phone, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:621:18", "data-component-name": "Phone", className: "w-6 h-6 text-primary shrink-0 mt-1" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 621,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:622:18", "data-component-name": "div", children: [
              /* @__PURE__ */ jsxDEV("h4", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:623:20", "data-component-name": "h4", className: "font-bold text-slate-900", children: "Telefone" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 623,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:624:20", "data-component-name": "a", href: "tel:+554135894699", className: "text-primary font-semibold hover:underline mt-1 block", children: "(41) 3589-4699" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 624,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 622,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 620,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 603,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:631:14", "data-component-name": "Button", asChild: true, size: "lg", className: "w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white", children: /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:632:16", "data-component-name": "a", href: WHATSAPP_LINK, target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsxDEV(FaWhatsapp, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:633:18", "data-component-name": "FaWhatsapp", className: "text-xl mr-2" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 633,
            columnNumber: 19
          }, this),
          " Agendar uma visita"
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 632,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 631,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
        lineNumber: 599,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:638:12", "data-component-name": "div", className: "lg:w-1/2 h-[400px] lg:h-auto", children: /* @__PURE__ */ jsxDEV(
        "iframe",
        {
          "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:639:14",
          "data-component-name": "iframe",
          src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.220556272554!2d-49.06649712386991!3d-25.430870933527266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce95e0c555555%3A0x6fb8f8a84615e45a!2sR.%20Bar%C3%A3o%20do%20Cerro%20Azul%2C%201869%20-%20Centro%2C%20Piraquara%20-%20PR%2C%2083301-010!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
          width: "100%",
          height: "100%",
          style: { border: 0 },
          allowFullScreen: true,
          loading: "lazy",
          referrerPolicy: "no-referrer-when-downgrade",
          className: "grayscale-[0.2] contrast-[0.9] opacity-90"
        },
        void 0,
        false,
        {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 639,
          columnNumber: 15
        },
        this
      ) }, void 0, false, {
        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
        lineNumber: 638,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
      lineNumber: 598,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
      lineNumber: 597,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
      lineNumber: 596,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("section", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:655:6", "data-component-name": "section", id: "contato", className: "py-24 bg-accent text-white relative", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:656:8", "data-component-name": "div", className: "absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-3xl rounded-full" }, void 0, false, {
        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
        lineNumber: 656,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:657:8", "data-component-name": "div", className: "container mx-auto px-4 md:px-6 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:658:10", "data-component-name": "div", className: "max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:659:12", "data-component-name": "div", className: "lg:w-1/2 flex flex-col justify-center text-center lg:text-left", children: [
          /* @__PURE__ */ jsxDEV("h2", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:660:14", "data-component-name": "h2", className: "text-3xl md:text-5xl font-serif font-bold mb-4 text-white", children: "Dê o primeiro passo hoje." }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 660,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:661:14", "data-component-name": "p", className: "text-xl text-slate-300 mb-8", children: "Vagas limitadas para planejamento personalizado gratuito este mês. Fale com a Equipe Cerbelo e descubra a estratégia ideal para o seu patrimônio." }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 661,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:663:14", "data-component-name": "div", className: "space-y-4 mb-8 hidden lg:block", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:664:16", "data-component-name": "div", className: "flex items-center gap-3 text-slate-300", children: [
              /* @__PURE__ */ jsxDEV(ShieldCheck, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:665:18", "data-component-name": "ShieldCheck", className: "w-5 h-5 text-secondary" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 665,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:666:18", "data-component-name": "span", children: "Seus dados estão seguros conosco" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 666,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 664,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:668:16", "data-component-name": "div", className: "flex items-center gap-3 text-slate-300", children: [
              /* @__PURE__ */ jsxDEV(TrendingUp, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:669:18", "data-component-name": "TrendingUp", className: "w-5 h-5 text-secondary" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 669,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:670:18", "data-component-name": "span", children: "Alavancagem com foco em resultados" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 670,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 668,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 663,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 659,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:675:12", "data-component-name": "div", className: "lg:w-1/2 bg-white rounded-2xl p-6 md:p-8 text-slate-900 shadow-xl", children: [
          /* @__PURE__ */ jsxDEV("h3", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:676:14", "data-component-name": "h3", className: "text-2xl font-bold text-accent mb-6 text-center", children: "Inicie sua simulação" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 676,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("form", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:677:14", "data-component-name": "form", className: "space-y-4", onSubmit: (e) => {
            e.preventDefault();
            window.open(WHATSAPP_LINK, "_blank");
          }, children: [
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:681:16", "data-component-name": "div", children: [
              /* @__PURE__ */ jsxDEV("label", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:682:18", "data-component-name": "label", className: "block text-sm font-medium text-slate-700 mb-1", children: "Nome completo" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 682,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("input", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:683:18", "data-component-name": "input", type: "text", className: "w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all", placeholder: "Como prefere ser chamado?", required: true }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 683,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 681,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:685:16", "data-component-name": "div", children: [
              /* @__PURE__ */ jsxDEV("label", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:686:18", "data-component-name": "label", className: "block text-sm font-medium text-slate-700 mb-1", children: "Telefone / WhatsApp" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 686,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("input", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:687:18", "data-component-name": "input", type: "tel", className: "w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all", placeholder: "(41) 90000-0000", required: true }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 687,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 685,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:689:16", "data-component-name": "div", children: [
              /* @__PURE__ */ jsxDEV("label", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:690:18", "data-component-name": "label", className: "block text-sm font-medium text-slate-700 mb-1", children: "Área de interesse" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 690,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("select", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:691:18", "data-component-name": "select", className: "w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all", required: true, defaultValue: "", children: [
                /* @__PURE__ */ jsxDEV("option", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:692:20", "data-component-name": "option", value: "", disabled: true, children: "Selecione um objetivo" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                  lineNumber: 692,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("option", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:693:20", "data-component-name": "option", value: "imovel", children: "Imóveis (Compra, Reforma, Construção)" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                  lineNumber: 693,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("option", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:694:20", "data-component-name": "option", value: "veiculo", children: "Veículos (Carros, Motos, Pesados)" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                  lineNumber: 694,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("option", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:695:20", "data-component-name": "option", value: "servico", children: "Serviços" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                  lineNumber: 695,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV("option", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:696:20", "data-component-name": "option", value: "investimento", children: "Investimento e Alavancagem" }, void 0, false, {
                  fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                  lineNumber: 696,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 691,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 689,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(Button, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:699:16", "data-component-name": "Button", type: "submit", size: "lg", className: "w-full bg-green-600 hover:bg-green-700 text-white h-14 text-base font-bold mt-4 shadow-md shadow-green-600/20", children: [
              /* @__PURE__ */ jsxDEV(FaWhatsapp, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:700:18", "data-component-name": "FaWhatsapp", className: "text-xl mr-2" }, void 0, false, {
                fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
                lineNumber: 700,
                columnNumber: 19
              }, this),
              "Quero falar com um consultor"
            ] }, void 0, true, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 699,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 677,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 675,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
        lineNumber: 658,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
        lineNumber: 657,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
      lineNumber: 655,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("footer", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:710:6", "data-component-name": "footer", className: "bg-slate-950 text-slate-400 py-16 border-t border-slate-900", children: /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:711:8", "data-component-name": "div", className: "container mx-auto px-4 md:px-6", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:712:10", "data-component-name": "div", className: "grid grid-cols-1 md:grid-cols-4 gap-12 mb-12", children: [
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:713:12", "data-component-name": "div", className: "md:col-span-2", children: [
          /* @__PURE__ */ jsxDEV("img", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:714:14", "data-component-name": "img", src: logo, alt: "Ademicon Equipe Cerbelo", className: "h-28 object-contain mb-6" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 714,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:715:14", "data-component-name": "p", className: "text-sm max-w-sm mb-6 leading-relaxed", children: "A Ademicon Piraquara - Equipe Cerbelo atua no mercado de consórcios e investimentos oferecendo planejamento financeiro seguro e transparente para a conquista dos seus maiores objetivos." }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 715,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:718:14", "data-component-name": "div", className: "flex gap-4", children: [
            /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:719:16", "data-component-name": "a", href: "#", className: "w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors", children: /* @__PURE__ */ jsxDEV(FaInstagram, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:720:18", "data-component-name": "FaInstagram", className: "text-xl" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 720,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 719,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:722:16", "data-component-name": "a", href: "#", className: "w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-colors", children: /* @__PURE__ */ jsxDEV(FaFacebook, { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:723:18", "data-component-name": "FaFacebook", className: "text-xl" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 723,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 722,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 718,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 713,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:728:12", "data-component-name": "div", children: [
          /* @__PURE__ */ jsxDEV("h4", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:729:14", "data-component-name": "h4", className: "text-white font-bold mb-6 uppercase tracking-wider text-sm", children: "Links Rápidos" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 729,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:730:14", "data-component-name": "ul", className: "space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:731:16", "data-component-name": "li", children: /* @__PURE__ */ jsxDEV("button", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:731:20", "data-component-name": "button", onClick: () => scrollTo("inicio"), className: "hover:text-primary transition-colors", children: "Início" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 731,
              columnNumber: 125
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 731,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:732:16", "data-component-name": "li", children: /* @__PURE__ */ jsxDEV("button", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:732:20", "data-component-name": "button", onClick: () => scrollTo("solucoes"), className: "hover:text-primary transition-colors", children: "Soluções em Consórcio" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 732,
              columnNumber: 125
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 732,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:733:16", "data-component-name": "li", children: /* @__PURE__ */ jsxDEV("button", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:733:20", "data-component-name": "button", onClick: () => scrollTo("diferenciais"), className: "hover:text-primary transition-colors", children: "Por que a Equipe Cerbelo" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 733,
              columnNumber: 125
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 733,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:734:16", "data-component-name": "li", children: /* @__PURE__ */ jsxDEV("button", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:734:20", "data-component-name": "button", onClick: () => scrollTo("gestor"), className: "hover:text-primary transition-colors", children: "Nosso Gestor" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 734,
              columnNumber: 125
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 734,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 730,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 728,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:738:12", "data-component-name": "div", children: [
          /* @__PURE__ */ jsxDEV("h4", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:739:14", "data-component-name": "h4", className: "text-white font-bold mb-6 uppercase tracking-wider text-sm", children: "Contato" }, void 0, false, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 739,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV("ul", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:740:14", "data-component-name": "ul", className: "space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:741:16", "data-component-name": "li", children: "R. Barão do Cerro Azul, 1869" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 741,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:742:16", "data-component-name": "li", children: "Salas 16, 17 e 18 - Centro" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 742,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:743:16", "data-component-name": "li", children: "Piraquara - PR" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 743,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("li", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:744:16", "data-component-name": "li", className: "pt-2", children: /* @__PURE__ */ jsxDEV("a", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:745:18", "data-component-name": "a", href: "tel:+554135894699", className: "text-white font-semibold hover:text-primary transition-colors", children: "(41) 3589-4699" }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 745,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
              lineNumber: 744,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
            lineNumber: 740,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 738,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
        lineNumber: 712,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:751:10", "data-component-name": "div", className: "pt-8 border-t border-slate-900 text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left", children: [
        /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:752:12", "data-component-name": "p", children: "Ademicon Consórcios e Investimentos. CNPJ: 14.341.002/0001-44. Autorizado pelo BACEN." }, void 0, false, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 752,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-replit-metadata": "artifacts/landing-page/src/pages/LandingPage.tsx:753:12", "data-component-name": "p", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Equipe Cerbelo. Todos os direitos reservados."
        ] }, void 0, true, {
          fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
          lineNumber: 753,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
        lineNumber: 751,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
      lineNumber: 711,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
      lineNumber: 710,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}
_s(LandingPage, "Tz1YhpjmJIU2IHcimEech/T/LuY=");
_c = LandingPage;
var _c;
$RefreshReg$(_c, "LandingPage");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "/home/runner/workspace/artifacts/landing-page/src/pages/LandingPage.tsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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QUFBLE9BM3JCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBNHJCQTtBQUVKO0FBQUFsRCxHQXB0QndCRCxhQUFXO0FBQUEsS0FBWEE7QUFBVyxJQUFBb0Q7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJCdWlsZGluZzIiLCJDYXIiLCJCcmllZmNhc2UiLCJUcmVuZGluZ1VwIiwiU2hpZWxkQ2hlY2siLCJVc2VycyIsIkNoZXZyb25SaWdodCIsIk1hcFBpbiIsIkNsb2NrIiwiUGhvbmUiLCJNZW51IiwiWCIsIkZhV2hhdHNhcHAiLCJGYUluc3RhZ3JhbSIsIkZhRmFjZWJvb2siLCJCdXR0b24iLCJsb2dvIiwibG9nb05hdmJhciIsInN0b3JlRnJvbnQiLCJtYW5hZ2VyUGhvdG8iLCJXSEFUU0FQUF9MSU5LIiwiZmFkZUluVXAiLCJoaWRkZW4iLCJvcGFjaXR5IiwieSIsInZpc2libGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwic3RhZ2dlckNvbnRhaW5lciIsInN0YWdnZXJDaGlsZHJlbiIsIkxhbmRpbmdQYWdlIiwiX3MiLCJpc1Njcm9sbGVkIiwic2V0SXNTY3JvbGxlZCIsIm1vYmlsZU1lbnVPcGVuIiwic2V0TW9iaWxlTWVudU9wZW4iLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzY3JvbGxUbyIsImlkIiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJiZWhhdmlvciIsIm9uY2UiLCJtYXJnaW4iLCJiZyIsInRhZyIsInRleHQiLCJsaWtlcyIsInRpbWUiLCJpY29uIiwibWFwIiwicG9zdCIsImkiLCJzcGxpdCIsInN0YXIiLCJ0aXRsZSIsImRlc2MiLCJzb2wiLCJpdGVtIiwic2NhbGUiLCJudW0iLCJzdGVwIiwibmFtZSIsImxvYyIsImluaXRpYWxzIiwidGVzdCIsImRlbGF5IiwicyIsImlkeCIsImJvcmRlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9wZW4iLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJMYW5kaW5nUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwid291dGVyXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgXG4gIEJ1aWxkaW5nMiwgQ2FyLCBCcmllZmNhc2UsIFRyZW5kaW5nVXAsIFNoaWVsZENoZWNrLCBcbiAgVXNlcnMsIEF3YXJkLCBDaGV2cm9uUmlnaHQsIE1hcFBpbiwgQ2xvY2ssIFBob25lLFxuICBNZW51LCBYXG59IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IEZhV2hhdHNhcHAsIEZhSW5zdGFncmFtLCBGYUZhY2Vib29rIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuXG5pbXBvcnQgbG9nbyBmcm9tIFwiQGFzc2V0cy9sb2dvMV8xNzc4Mzk0MTc3MTA3LnBuZ1wiO1xuaW1wb3J0IGxvZ29OYXZiYXIgZnJvbSBcIkBhc3NldHMvQ2hhdEdQVF9JbWFnZV8xMF9kZV9tYWkuX2RlXzIwMjYsXzAzXzQ4XzI4XzE3NzgzOTU3MTU1NDMucG5nXCI7XG5pbXBvcnQgc3RvcmVGcm9udCBmcm9tIFwiQGFzc2V0cy80MGIzOWYwYi1hNzUwLTRjMTUtOTkyOC0zNGIwZWNjOGY3ODVfMTc3ODM5NDY4OTI1OC5wbmdcIjtcbmltcG9ydCBtYW5hZ2VyUGhvdG8gZnJvbSBcIkBhc3NldHMvOWY2YWY5YmQtZDg2Mi00Y2M0LTg3ODktZjFlMjBiNTY2ZDg1XzE3NzgzOTQ2ODU3NDUucG5nXCI7XG5pbXBvcnQgZ29vZ2xlQnVzaW5lc3MgZnJvbSBcIkBhc3NldHMvaW1hZ2VfMTc3ODM5NDMyMjAxNS5wbmdcIjtcblxuY29uc3QgV0hBVFNBUFBfTElOSyA9IFwiaHR0cHM6Ly93YS5tZS81NTQxOTg5OTk5OTk5XCI7XG5cbmNvbnN0IGZhZGVJblVwID0ge1xuICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogMzAgfSxcbiAgdmlzaWJsZTogeyBvcGFjaXR5OiAxLCB5OiAwLCB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjYsIGVhc2U6IFwiZWFzZU91dFwiIH0gfVxufTtcblxuY29uc3Qgc3RhZ2dlckNvbnRhaW5lciA9IHtcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAgfSxcbiAgdmlzaWJsZToge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjE1XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYW5kaW5nUGFnZSgpIHtcbiAgY29uc3QgW2lzU2Nyb2xsZWQsIHNldElzU2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbW9iaWxlTWVudU9wZW4sIHNldE1vYmlsZU1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIHNldElzU2Nyb2xsZWQod2luZG93LnNjcm9sbFkgPiAyMCk7XG4gICAgfTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2Nyb2xsVG8gPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgIHNldE1vYmlsZU1lbnVPcGVuKGZhbHNlKTtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBjb25zdCB5ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWSAtIDgwO1xuICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiB5LCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctd2hpdGUgdGV4dC1zbGF0ZS05MDAgZm9udC1zYW5zXCI+XG4gICAgICB7LyogMS4gSGVhZGVyIGZpeG8gKi99XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17YGZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIHotNTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7aXNTY3JvbGxlZCA/ICdiZy13aGl0ZS85NSBiYWNrZHJvcC1ibHVyLW1kIHNoYWRvdy1zbSBib3JkZXItYiBib3JkZXItc2xhdGUtMTAwIHB5LTMnIDogJ2JnLXdoaXRlIHB5LTUnfWB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtNiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4gc2Nyb2xsVG8oJ2luaWNpbycpfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvTmF2YmFyfSBhbHQ9XCJFcXVpcGUgQ2VyYmVsbyAtIEFkZW1pY29uXCIgY2xhc3NOYW1lPVwiaC0xNCBtZDpoLTE2IG9iamVjdC1jb250YWluXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICB7LyogRGVza3RvcCBOYXYgKi99XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTYgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTcwMFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUbygnaW5pY2lvJyl9IGNsYXNzTmFtZT1cImhvdmVyOnRleHQtcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9yc1wiPkluw61jaW88L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2Nyb2xsVG8oJ3NvbHVjb2VzJyl9IGNsYXNzTmFtZT1cImhvdmVyOnRleHQtcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9yc1wiPlNvbHXDp8O1ZXM8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2Nyb2xsVG8oJ2RpZmVyZW5jaWFpcycpfSBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnNcIj5Qb3IgcXVlIE7Ds3M8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2Nyb2xsVG8oJ2dlc3RvcicpfSBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnNcIj5HZXN0b3I8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2Nyb2xsVG8oJ2RlcG9pbWVudG9zJyl9IGNsYXNzTmFtZT1cImhvdmVyOnRleHQtcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9yc1wiPkRlcG9pbWVudG9zPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvKCdsb2phJyl9IGNsYXNzTmFtZT1cImhvdmVyOnRleHQtcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9yc1wiPkxvY2FsaXphw6fDo288L2J1dHRvbj5cbiAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrXCI+XG4gICAgICAgICAgICA8QnV0dG9uIGFzQ2hpbGQgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNjAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGdhcC0yIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj17V0hBVFNBUFBfTElOS30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgIDxGYVdoYXRzYXBwIGNsYXNzTmFtZT1cInRleHQtbGdcIiAvPlxuICAgICAgICAgICAgICAgIEZhbGFyIGNvbSB1bSBDb25zdWx0b3JcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogTW9iaWxlIE1lbnUgVG9nZ2xlICovfVxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsZzpoaWRkZW4gcC0yIHRleHQtc2xhdGUtNjAwXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZU1lbnVPcGVuKCFtb2JpbGVNZW51T3Blbil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge21vYmlsZU1lbnVPcGVuID8gPFggLz4gOiA8TWVudSAvPn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIE1vYmlsZSBOYXYgKi99XG4gICAgICAgIHttb2JpbGVNZW51T3BlbiAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpoaWRkZW4gYWJzb2x1dGUgdG9wLWZ1bGwgbGVmdC0wIHJpZ2h0LTAgYmctd2hpdGUgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTEwMCBzaGFkb3ctbGcgcHktNCBweC00IGZsZXggZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2Nyb2xsVG8oJ2luaWNpbycpfSBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgZm9udC1tZWRpdW0gcC0yIGhvdmVyOmJnLXNsYXRlLTUwIHJvdW5kZWQtbWRcIj5JbsOtY2lvPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvKCdzb2x1Y29lcycpfSBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgZm9udC1tZWRpdW0gcC0yIGhvdmVyOmJnLXNsYXRlLTUwIHJvdW5kZWQtbWRcIj5Tb2x1w6fDtWVzPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvKCdkaWZlcmVuY2lhaXMnKX0gY2xhc3NOYW1lPVwidGV4dC1sZWZ0IGZvbnQtbWVkaXVtIHAtMiBob3ZlcjpiZy1zbGF0ZS01MCByb3VuZGVkLW1kXCI+UG9yIHF1ZSBOw7NzPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvKCdnZXN0b3InKX0gY2xhc3NOYW1lPVwidGV4dC1sZWZ0IGZvbnQtbWVkaXVtIHAtMiBob3ZlcjpiZy1zbGF0ZS01MCByb3VuZGVkLW1kXCI+R2VzdG9yPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvKCdsb2phJyl9IGNsYXNzTmFtZT1cInRleHQtbGVmdCBmb250LW1lZGl1bSBwLTIgaG92ZXI6Ymctc2xhdGUtNTAgcm91bmRlZC1tZFwiPkxvY2FsaXphw6fDo288L2J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gYXNDaGlsZCBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JlZW4tNjAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGdhcC0yIG10LTJcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj17V0hBVFNBUFBfTElOS30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgIDxGYVdoYXRzYXBwIGNsYXNzTmFtZT1cInRleHQtbGdcIiAvPlxuICAgICAgICAgICAgICAgIEZhbGFyIGNvbSB1bSBDb25zdWx0b3JcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgey8qIDIuIEhlcm8gU2VjdGlvbiAqL31cbiAgICAgIDxzZWN0aW9uIGlkPVwiaW5pY2lvXCIgY2xhc3NOYW1lPVwicHQtMzIgcGItMjAgbWQ6cHQtNDAgbWQ6cGItMjggcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIGJnLWFjY2VudCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB6LTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLWFjY2VudCB2aWEtYWNjZW50LzkwIHRvLXRyYW5zcGFyZW50IHotMTBcIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPXtzdG9yZUZyb250fSBhbHQ9XCJGYWNoYWRhIEFkZW1pY29uIFBpcmFxdWFyYVwiIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyIG9wYWNpdHktMzAgb2JqZWN0LXJpZ2h0XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtNiByZWxhdGl2ZSB6LTIwXCI+XG4gICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgIGFuaW1hdGU9XCJ2aXNpYmxlXCJcbiAgICAgICAgICAgIHZhcmlhbnRzPXtzdGFnZ2VyQ29udGFpbmVyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctM3hsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz17ZmFkZUluVXB9IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBweC0zIHB5LTEuNSByb3VuZGVkLWZ1bGwgYmctd2hpdGUvMTAgYm9yZGVyIGJvcmRlci13aGl0ZS8yMCB0ZXh0LXNtIGZvbnQtbWVkaXVtIG1iLTZcIj5cbiAgICAgICAgICAgICAgPFNoaWVsZENoZWNrIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC1zZWNvbmRhcnlcIiAvPlxuICAgICAgICAgICAgICA8c3Bhbj5VbmlkYWRlIEFkZW1pY29uIFBpcmFxdWFyYSDigKIgQXRlbmRpbWVudG8gY29uc3VsdGl2byDigKIgUGxhbmVqYW1lbnRvIHBlcnNvbmFsaXphZG88L3NwYW4+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxtb3Rpb24uaDEgdmFyaWFudHM9e2ZhZGVJblVwfSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBtZDp0ZXh0LTV4bCBsZzp0ZXh0LTZ4bCBmb250LXNlcmlmIGZvbnQtYm9sZCBsZWFkaW5nLXRpZ2h0IG1iLTZcIj5cbiAgICAgICAgICAgICAgUGxhbmVqZSBzZXUgZnV0dXJvIGNvbSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeVwiPnNlZ3VyYW7Dp2E8L3NwYW4+IGF0cmF2w6lzIGRhIEFkZW1pY29uIFBpcmFxdWFyYVxuICAgICAgICAgICAgPC9tb3Rpb24uaDE+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxtb3Rpb24ucCB2YXJpYW50cz17ZmFkZUluVXB9IGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC14bCB0ZXh0LXNsYXRlLTMwMCBtYi04IG1heC13LTJ4bCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgU29sdcOnw7VlcyBpbnRlbGlnZW50ZXMgZW0gY29uc8OzcmNpbyBlIGludmVzdGltZW50byBwYXJhIHF1ZW0gZGVzZWphIGNvbnF1aXN0YXIgaW3Ds3ZlaXMsIHZlw61jdWxvcyBlIHBhdHJpbcO0bmlvIGNvbSBlc3RyYXTDqWdpYS5cbiAgICAgICAgICAgIDwvbW90aW9uLnA+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtmYWRlSW5VcH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBnYXAtNFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uIGFzQ2hpbGQgc2l6ZT1cImxnXCIgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNjAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGgtMTQgcHgtOCB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB3LWZ1bGwgc206dy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17V0hBVFNBUFBfTElOS30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgPEZhV2hhdHNhcHAgY2xhc3NOYW1lPVwidGV4dC14bCBtci0yXCIgLz5cbiAgICAgICAgICAgICAgICAgIFNpbXVsYXIgYWdvcmEgcGVsbyBXaGF0c0FwcFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gYXNDaGlsZCB2YXJpYW50PVwib3V0bGluZVwiIHNpemU9XCJsZ1wiIGNsYXNzTmFtZT1cImgtMTQgcHgtOCB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB3LWZ1bGwgc206dy1hdXRvIGJnLXRyYW5zcGFyZW50IGJvcmRlci13aGl0ZS8zMCB0ZXh0LXdoaXRlIGhvdmVyOmJnLXdoaXRlLzEwIGhvdmVyOnRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvKCdsb2phJyl9PlxuICAgICAgICAgICAgICAgICAgQ29uaGVjZXIgYSB1bmlkYWRlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiAyLiBJbnN0YWdyYW0gRmVlZCAqL31cbiAgICAgIDxzZWN0aW9uIGlkPVwiaW5zdGFncmFtXCIgY2xhc3NOYW1lPVwicHktMTYgYmctd2hpdGUgYm9yZGVyLWIgYm9yZGVyLXNsYXRlLTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtNlwiPlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgIHdoaWxlSW5WaWV3PVwidmlzaWJsZVwiXG4gICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlLCBtYXJnaW46IFwiLTEwMHB4XCIgfX1cbiAgICAgICAgICAgIHZhcmlhbnRzPXtzdGFnZ2VyQ29udGFpbmVyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtmYWRlSW5VcH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgbWItM1wiPlxuICAgICAgICAgICAgICA8RmFJbnN0YWdyYW0gY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1waW5rLTUwMFwiIC8+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYWRlbWljb25waXJhcXVhcmEvXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXNsYXRlLTcwMCBob3Zlcjp0ZXh0LXBpbmstNTAwIHRyYW5zaXRpb24tY29sb3JzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEBhZGVtaWNvbnBpcmFxdWFyYVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8bW90aW9uLmgyIHZhcmlhbnRzPXtmYWRlSW5VcH0gY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1zZXJpZiBmb250LWJvbGQgdGV4dC1zbGF0ZS05MDAgbWItM1wiPlxuICAgICAgICAgICAgICBBY29tcGFuaGUgYSBFcXVpcGUgQ2VyYmVsb1xuICAgICAgICAgICAgPC9tb3Rpb24uaDI+XG4gICAgICAgICAgICA8bW90aW9uLnAgdmFyaWFudHM9e2ZhZGVJblVwfSBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTUwMCBtYXgtdy14bCBteC1hdXRvXCI+XG4gICAgICAgICAgICAgIEZpcXVlIHBvciBkZW50cm8gZGFzIG5vdmlkYWRlcywgZGljYXMgZGUgaW52ZXN0aW1lbnRvIGUgY29ucXVpc3RhcyBkb3Mgbm9zc29zIGNsaWVudGVzLlxuICAgICAgICAgICAgPC9tb3Rpb24ucD5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgICB3aGlsZUluVmlldz1cInZpc2libGVcIlxuICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSwgbWFyZ2luOiBcIi04MHB4XCIgfX1cbiAgICAgICAgICAgIHZhcmlhbnRzPXtzdGFnZ2VyQ29udGFpbmVyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBnYXAtMyBtZDpnYXAtNFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJnOiBcImZyb20tWyMwRDFCMkFdIHZpYS1bIzFhMmY0NV0gdG8tWyNDOUE4NENdXCIsXG4gICAgICAgICAgICAgICAgdGFnOiBcIkNvbnPDs3JjaW8gZGUgSW3Ds3ZlaXNcIixcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlJlYWxpemUgbyBzb25obyBkYSBjYXNhIHByw7NwcmlhIGNvbSBwbGFuZWphbWVudG8gZSBzZW0ganVyb3MuIEZhbGUgY29tIHVtIGRlIG5vc3NvcyBjb25zdWx0b3JlcyBob2plIG1lc21vLlwiLFxuICAgICAgICAgICAgICAgIGxpa2VzOiBcIjIzNFwiLFxuICAgICAgICAgICAgICAgIHRpbWU6IFwiMiBkaWFzIGF0csOhc1wiLFxuICAgICAgICAgICAgICAgIGljb246IDxCdWlsZGluZzIgY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LVsjQzlBODRDXVwiIC8+LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmc6IFwiZnJvbS1bI0U4MDAxRF0gdmlhLVsjYjUwMDFhXSB0by1bIzBEMUIyQV1cIixcbiAgICAgICAgICAgICAgICB0YWc6IFwiQ29uc8OzcmNpbyBkZSBWZcOtY3Vsb3NcIixcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlNldSBwcsOzeGltbyBjYXJybyBwb2RlIHNlciBhZHF1aXJpZG8gZGUgZm9ybWEgaW50ZWxpZ2VudGUuIENvbnPDs3JjaW8gQWRlbWljb246IHNlbSBlbnRyYWRhLCBzZW0ganVyb3MuXCIsXG4gICAgICAgICAgICAgICAgbGlrZXM6IFwiMTg5XCIsXG4gICAgICAgICAgICAgICAgdGltZTogXCI0IGRpYXMgYXRyw6FzXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogPENhciBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtd2hpdGVcIiAvPixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJnOiBcImZyb20tWyNDOUE4NENdIHZpYS1bI2EwN2MzMF0gdG8tWyMwRDFCMkFdXCIsXG4gICAgICAgICAgICAgICAgdGFnOiBcIlBsYW5lamFtZW50byBQYXRyaW1vbmlhbFwiLFxuICAgICAgICAgICAgICAgIHRleHQ6IFwiQ3Jlc2NpbWVudG8gcGF0cmltb25pYWwgY29tIGVzdHJhdMOpZ2lhLiBBIEVxdWlwZSBDZXJiZWxvIHRlIGFqdWRhIGEgY29ucXVpc3RhciBtYWlzIGNvbSBtZW5vcyByaXNjby5cIixcbiAgICAgICAgICAgICAgICBsaWtlczogXCIzMTJcIixcbiAgICAgICAgICAgICAgICB0aW1lOiBcIjUgZGlhcyBhdHLDoXNcIixcbiAgICAgICAgICAgICAgICBpY29uOiA8VHJlbmRpbmdVcCBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtd2hpdGVcIiAvPixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJnOiBcImZyb20tWyMwRDFCMkFdIHZpYS1bIzE2MjMzNl0gdG8tWyNFODAwMURdXCIsXG4gICAgICAgICAgICAgICAgdGFnOiBcIkRpY2EgRmluYW5jZWlyYVwiLFxuICAgICAgICAgICAgICAgIHRleHQ6IFwiVm9jw6ogc2FiaWEgcXVlIG8gY29uc8OzcmNpbyDDqSB1bWEgZGFzIGZvcm1hcyBtYWlzIHNlZ3VyYXMgZGUgaW52ZXN0aW1lbnRvIG5vIEJyYXNpbD8gQXV0b3JpemFkbyBwZWxvIEJBQ0VOLlwiLFxuICAgICAgICAgICAgICAgIGxpa2VzOiBcIjQyMVwiLFxuICAgICAgICAgICAgICAgIHRpbWU6IFwiMSBzZW1hbmEgYXRyw6FzXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogPFNoaWVsZENoZWNrIGNsYXNzTmFtZT1cInctOCBoLTggdGV4dC1bI0M5QTg0Q11cIiAvPixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJnOiBcImZyb20tWyMxYTJmNDVdIHZpYS1bIzBEMUIyQV0gdG8tWyNDOUE4NENdXCIsXG4gICAgICAgICAgICAgICAgdGFnOiBcIkVxdWlwZSBDZXJiZWxvXCIsXG4gICAgICAgICAgICAgICAgdGV4dDogXCJOb3NzYSBlcXVpcGUgZXN0w6EgcHJvbnRhIHBhcmEgdHJhbnNmb3JtYXIgc2V1cyBvYmpldGl2b3MgZW0gY29ucXVpc3RhcyByZWFpcy4gQWdlbmRlIHVtYSBjb25zdWx0b3JpYSBncmF0dWl0YS5cIixcbiAgICAgICAgICAgICAgICBsaWtlczogXCIyNzhcIixcbiAgICAgICAgICAgICAgICB0aW1lOiBcIjEgc2VtYW5hIGF0csOhc1wiLFxuICAgICAgICAgICAgICAgIGljb246IDxVc2VycyBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtWyNDOUE4NENdXCIgLz4sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZzogXCJmcm9tLVsjRTgwMDFEXSB2aWEtWyMwRDFCMkFdIHRvLVsjQzlBODRDXVwiLFxuICAgICAgICAgICAgICAgIHRhZzogXCJVbmlkYWRlIFBpcmFxdWFyYVwiLFxuICAgICAgICAgICAgICAgIHRleHQ6IFwiRXN0YW1vcyBlbSBQaXJhcXVhcmEvUFIgcHJvbnRvcyBwYXJhIHRlIGF0ZW5kZXIuIFZlbmhhIG5vcyB2aXNpdGFyIG5hIFIuIEJhcsOjbyBkbyBDZXJybyBBenVsLCAxODY5LlwiLFxuICAgICAgICAgICAgICAgIGxpa2VzOiBcIjE1NlwiLFxuICAgICAgICAgICAgICAgIHRpbWU6IFwiMiBzZW1hbmFzIGF0csOhc1wiLFxuICAgICAgICAgICAgICAgIGljb246IDxNYXBQaW4gY2xhc3NOYW1lPVwidy04IGgtOCB0ZXh0LXdoaXRlXCIgLz4sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLm1hcCgocG9zdCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8bW90aW9uLmFcbiAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vYWRlbWljb25waXJhcXVhcmEvXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtmYWRlSW5VcH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSBhc3BlY3Qtc3F1YXJlIHJvdW5kZWQteGwgb3ZlcmZsb3ctaGlkZGVuIGN1cnNvci1wb2ludGVyIGJsb2NrXCJcbiAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD17YGNhcmQtaW5zdGFncmFtLSR7aX1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLWJyICR7cG9zdC5iZ31gfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBwLTQgbWQ6cC01XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtYm9sZCB0ZXh0LXdoaXRlLzgwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciBiZy1ibGFjay8yMCBweC0yIHB5LTEgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3Bvc3QudGFnfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtwb3N0Lmljb259XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14cyBtZDp0ZXh0LXNtIGxlYWRpbmctc251ZyBsaW5lLWNsYW1wLTMgbWItMiBmb250LW1lZGl1bSBkcm9wLXNoYWRvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnRleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC13aGl0ZS82MCB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+4pmlIHtwb3N0Lmxpa2VzfSBjdXJ0aWRhczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC50aW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctYmxhY2svMCBncm91cC1ob3ZlcjpiZy1ibGFjay8yMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxGYUluc3RhZ3JhbSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtNHhsIG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTgwIHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0zMDBcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L21vdGlvbi5hPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgICAgd2hpbGVJblZpZXc9XCJ2aXNpYmxlXCJcbiAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICAgIHZhcmlhbnRzPXtmYWRlSW5VcH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LThcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2FkZW1pY29ucGlyYXF1YXJhL1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtOCBweS0zIHJvdW5kZWQtZnVsbCBib3JkZXItMiBib3JkZXItcGluay00MDAgdGV4dC1waW5rLTUwMCBmb250LXNlbWlib2xkIGhvdmVyOmJnLXBpbmstNTAwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJsaW5rLWluc3RhZ3JhbS1wcm9maWxlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZhSW5zdGFncmFtIGNsYXNzTmFtZT1cInRleHQtbGdcIiAvPlxuICAgICAgICAgICAgICBWZXIgdG9kb3Mgb3MgcG9zdHMgbm8gSW5zdGFncmFtXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIDMuIEF1dG9yaWRhZGUgZGEgdW5pZGFkZSAqL31cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTE2IGJnLXNsYXRlLTUwIGJvcmRlci1iIGJvcmRlci1zbGF0ZS0yMDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LTZcIj5cbiAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgICAgd2hpbGVJblZpZXc9XCJ2aXNpYmxlXCJcbiAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUsIG1hcmdpbjogXCItMTAwcHhcIiB9fVxuICAgICAgICAgICAgdmFyaWFudHM9e3N0YWdnZXJDb250YWluZXJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAtMTJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtmYWRlSW5VcH0gY2xhc3NOYW1lPVwibGc6dy0xLzMgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWF4LXcteHNcIj5cbiAgICAgICAgICAgICAgICB7LyogT3V0ZXIgZ2xvdyByaW5nICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWluc2V0LTEgcm91bmRlZC0zeGwgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bI0M5QTg0Q10gdmlhLVsjRTgwMDFEXSB0by1bI0M5QTg0Q10gb3BhY2l0eS00MCBibHVyLXNtXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1bIzBEMUIyQV0gdG8tWyMxNjIzMzZdIHJvdW5kZWQtM3hsIGJvcmRlciBib3JkZXItWyNDOUE4NENdLzQwIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctMnhsXCI+XG4gICAgICAgICAgICAgICAgICB7LyogTG9nbyBmcmFtZSAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBwdC04IHBiLTQgcHgtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbGcgcmluZy0yIHJpbmctWyNDOUE4NENdLzIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGFsdD1cIkVxdWlwZSBDZXJiZWxvIC0gQWRlbWljb24gUGlyYXF1YXJhXCIgY2xhc3NOYW1lPVwidy01NiBvYmplY3QtY29udGFpbiBibG9ja1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7LyogRGl2aWRlciAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtNiBoLXB4IGJnLWdyYWRpZW50LXRvLXIgZnJvbS10cmFuc3BhcmVudCB2aWEtWyNDOUE4NENdLzUwIHRvLXRyYW5zcGFyZW50XCIgLz5cbiAgICAgICAgICAgICAgICAgIHsvKiBSYXRpbmcgKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0zIHB5LTUgcHgtNlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC13aGl0ZSB0cmFja2luZy10aWdodFwiPjQsMzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0wLjVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdGV4dC1hbWJlci00MDAgdGV4dC14bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyfimIXimIXimIXimIUnLnNwbGl0KCcnKS5tYXAoKHN0YXIsIGkpID0+IDxzcGFuIGtleT17aX0+e3N0YXJ9PC9zcGFuPil9XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcGFjaXR5LTMwXCI+4piFPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1zZW1pYm9sZCB0ZXh0LVsjQzlBODRDXSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5ubyBHb29nbGUg4oCiIDE1IGF2YWxpYcOnw7Vlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy0yLzMgdy1mdWxsIGdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTMgZ2FwLTZcIj5cbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e2ZhZGVJblVwfSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBzbTp0ZXh0LWxlZnQgYm9yZGVyLWwtMiBib3JkZXItcHJpbWFyeS8yMCBwbC02XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VyaWYgZm9udC1ib2xkIHRleHQtYWNjZW50IG1iLTJcIj5NYWlzIGRlIDMwPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNjAwIGZvbnQtbWVkaXVtXCI+QW5vcyBBZGVtaWNvbiBubyBtZXJjYWRvPC9wPlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtmYWRlSW5VcH0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgc206dGV4dC1sZWZ0IGJvcmRlci1sLTIgYm9yZGVyLXByaW1hcnkvMjAgcGwtNlwiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlcmlmIGZvbnQtYm9sZCB0ZXh0LWFjY2VudCBtYi0yXCI+KzE1PC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNjAwIGZvbnQtbWVkaXVtXCI+Q29uc3VsdG9yZXMgZXNwZWNpYWxpemFkb3M8L3A+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgdmFyaWFudHM9e2ZhZGVJblVwfSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBzbTp0ZXh0LWxlZnQgYm9yZGVyLWwtMiBib3JkZXItcHJpbWFyeS8yMCBwbC02XCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VyaWYgZm9udC1ib2xkIHRleHQtYWNjZW50IG1iLTJcIj4xMDAlPC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNjAwIGZvbnQtbWVkaXVtXCI+RGFzIGNvdGFzIGNvbSBCQUNFTjwvcD5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIDQuIFNvbHXDp8O1ZXMgKi99XG4gICAgICA8c2VjdGlvbiBpZD1cInNvbHVjb2VzXCIgY2xhc3NOYW1lPVwicHktMjQgYmctd2hpdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1heC13LTJ4bCBteC1hdXRvIG1iLTE2XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdHJhY2tpbmctd2lkZXIgdGV4dC1wcmltYXJ5IHVwcGVyY2FzZSBtYi0zXCI+Tm9zc2FzIFNvbHXDp8O1ZXM8L2gyPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtc2VyaWYgZm9udC1ib2xkIHRleHQtYWNjZW50IG1iLTZcIj5cbiAgICAgICAgICAgICAgUGxhbmVqYW1lbnRvIGZlaXRvIHBhcmEgc3VhIHJlYWxpZGFkZVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNjAwIHRleHQtbGdcIj5cbiAgICAgICAgICAgICAgT2ZlcmVjZW1vcyBsaW5oYXMgZGUgY29uc8OzcmNpbyBlc3RydXR1cmFkYXMgcGFyYSBhbXBsaWHDp8OjbyBkZSBwYXRyaW3DtG5pbyBzZW0gcGFnYXIganVyb3MgYWJ1c2l2b3MuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgICAgd2hpbGVJblZpZXc9XCJ2aXNpYmxlXCJcbiAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUsIG1hcmdpbjogXCItMTAwcHhcIiB9fVxuICAgICAgICAgICAgdmFyaWFudHM9e3N0YWdnZXJDb250YWluZXJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC02XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWNvbjogPEJ1aWxkaW5nMiBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtcHJpbWFyeVwiIC8+LFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbnPDs3JjaW8gZGUgSW3Ds3ZlaXNcIixcbiAgICAgICAgICAgICAgICBkZXNjOiBcIkNvbXByZSwgY29uc3RydWEgb3UgcmVmb3JtZSBzZXUgaW3Ds3ZlbCByZXNpZGVuY2lhbCBvdSBjb21lcmNpYWwgZGUgZm9ybWEgcGxhbmVqYWRhIGUgc2VtIGp1cm9zLlwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWNvbjogPENhciBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtcHJpbWFyeVwiIC8+LFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbnPDs3JjaW8gZGUgVmXDrWN1bG9zXCIsXG4gICAgICAgICAgICAgICAgZGVzYzogXCJBZHF1aXJhIGNhcnJvcywgbW90b3Mgb3UgdmXDrWN1bG9zIHBlc2Fkb3Mgbm92b3Mgb3Ugc2VtaW5vdm9zIGNvbSBwcmF6b3MgZSBwYXJjZWxhcyBmbGV4w612ZWlzLlwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWNvbjogPEJyaWVmY2FzZSBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtcHJpbWFyeVwiIC8+LFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNvbnPDs3JjaW8gZGUgU2VydmnDp29zXCIsXG4gICAgICAgICAgICAgICAgZGVzYzogXCJSZWFsaXplIHZpYWdlbnMsIGNpcnVyZ2lhcywgZmVzdGFzIG91IHBhZ3VlIGVzdHVkb3MgYXRyYXbDqXMgZGUgY2FydGFzIGRlIGNyw6lkaXRvIHBsYW5lamFkYXMuXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpY29uOiA8VHJlbmRpbmdVcCBjbGFzc05hbWU9XCJ3LTggaC04IHRleHQtcHJpbWFyeVwiIC8+LFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkludmVzdGltZW50byBQYXRyaW1vbmlhbFwiLFxuICAgICAgICAgICAgICAgIGRlc2M6IFwiVXNlIG8gY29uc8OzcmNpbyBjb21vIGFsYXZhbmNhZ2VtIGZpbmFuY2VpcmEgcGFyYSBjcmlhciByZW5kYSBwYXNzaXZhIGUgbXVsdGlwbGljYXIgc2V1IGNhcGl0YWwuXCIsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0ubWFwKChzb2wsIGkpID0+IChcbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXYga2V5PXtpfSB2YXJpYW50cz17ZmFkZUluVXB9IGNsYXNzTmFtZT1cImdyb3VwIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHAtOCBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBzaGFkb3ctc20gaG92ZXI6c2hhZG93LXhsIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBob3Zlcjpib3JkZXItcHJpbWFyeS8yMCBmbGV4IGZsZXgtY29sIGgtZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xNiBoLTE2IHJvdW5kZWQteGwgYmctcmVkLTUwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTYgZ3JvdXAtaG92ZXI6c2NhbGUtMTEwIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgICAgICAgICAge3NvbC5pY29ufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWFjY2VudCBtYi0zXCI+e3NvbC50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNjAwIG1iLTYgbGVhZGluZy1yZWxheGVkIGZsZXgtZ3Jvd1wiPntzb2wuZGVzY308L3A+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17V0hBVFNBUFBfTElOS30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBmb250LXNlbWlib2xkIHRleHQtcHJpbWFyeSBob3Zlcjp0ZXh0LWFjY2VudCB0cmFuc2l0aW9uLWNvbG9ycyBtdC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICBTYWliYSBtYWlzIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwidy00IGgtNCBtbC0xXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiA1LiBQb3IgcXVlIGVzY29saGVyICovfVxuICAgICAgPHNlY3Rpb24gaWQ9XCJkaWZlcmVuY2lhaXNcIiBjbGFzc05hbWU9XCJweS0yNCBiZy1hY2NlbnQgdGV4dC13aGl0ZSByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCBiZy1bcmFkaWFsLWdyYWRpZW50KGVsbGlwc2VfYXRfdG9wX3JpZ2h0LF92YXIoLS10dy1ncmFkaWVudC1zdG9wcykpXSBmcm9tLXNlY29uZGFyeS8yMCB2aWEtYWNjZW50IHRvLWFjY2VudCBvcGFjaXR5LTUwXCI+PC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtNiByZWxhdGl2ZSB6LTEwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGxnOmZsZXgtcm93IGdhcC0xNiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy0xLzJcIj5cbiAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICB3aGlsZUluVmlldz1cInZpc2libGVcIlxuICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICAgICAgICB2YXJpYW50cz17ZmFkZUluVXB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdHJhY2tpbmctd2lkZXIgdGV4dC1zZWNvbmRhcnkgdXBwZXJjYXNlIG1iLTNcIj5PIERpZmVyZW5jaWFsIEVxdWlwZSBDZXJiZWxvPC9oMj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC01eGwgZm9udC1zZXJpZiBmb250LWJvbGQgbWItNiBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICBOw6NvIHZlbmRlbW9zIGNvdGFzLiBEZXNlbmhhbW9zIG8gc2V1IGZ1dHVyby5cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtMzAwIHRleHQtbGcgbWItOCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgIE5hIEFkZW1pY29uIFBpcmFxdWFyYSwgdm9jw6ogZW5jb250cmEgdW0gYW1iaWVudGUgY29uc3VsdGl2byBvbmRlIHNldSBwcm9qZXRvIGRlIHZpZGEgw6kgbyBjZW50cm8gZGEgZXN0cmF0w6lnaWEuIEEgRXF1aXBlIENlcmJlbG8gw6kgcmVjb25oZWNpZGEgcGVsYSB0cmFuc3BhcsOqbmNpYSBlIHBlbG8gYWNvbXBhbmhhbWVudG8gZG8gaW7DrWNpbyBhdMOpIGEgY29udGVtcGxhw6fDo28uXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgICB7W1xuICAgICAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIkF0ZW5kaW1lbnRvIFBlcnNvbmFsaXphZG9cIiwgZGVzYzogXCJTZXUgY29uc3VsdG9yIGVudGVuZGUgc2V1IGZsdXhvIGRlIGNhaXhhIGFudGVzIGRlIG9mZXJ0YXIgcXVhbHF1ZXIgcGxhbm8uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJDb25zdWx0b3JlcyBDZXJ0aWZpY2Fkb3NcIiwgZGVzYzogXCJQcm9maXNzaW9uYWlzIHRyZWluYWRvcyBwYXJhIGNyaWFyIGVzdHJhdMOpZ2lhcyBkZSBhbGF2YW5jYWdlbSBwYXRyaW1vbmlhbCByZWFpcy5cIiB9LFxuICAgICAgICAgICAgICAgICAgICB7IHRpdGxlOiBcIkFwb2lvIFDDs3MtVmVuZGFcIiwgZGVzYzogXCJHZXN0w6NvIGNvbXBsZXRhIGRvIHNldSBncnVwbyBlIGF1eMOtbGlvIGVzdHJhdMOpZ2ljbyBwYXJhIGxhbmNlcyBuYXMgYXNzZW1ibGVpYXMuXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogXCJNYWlvciBSZWRlIGRvIEJyYXNpbFwiLCBkZXNjOiBcIlBhcmNlcmlhIGNvbSBhIEFkZW1pY29uLCBhIG1haW9yIGFkbWluaXN0cmFkb3JhIGluZGVwZW5kZW50ZSBkbyBwYcOtcy5cIiB9XG4gICAgICAgICAgICAgICAgICBdLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwiZmxleCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMSB3LTYgaC02IHJvdW5kZWQtZnVsbCBiZy1zZWNvbmRhcnkvMjAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc2hyaW5rLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yIGgtMiByb3VuZGVkLWZ1bGwgYmctc2Vjb25kYXJ5XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG1iLTFcIj57aXRlbS50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS00MDBcIj57aXRlbS5kZXNjfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy0xLzIgdy1mdWxsXCI+XG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCBzY2FsZTogMC45NSB9fVxuICAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHNjYWxlOiAxIH19XG4gICAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNiB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQtMnhsIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctMnhsIGJvcmRlciBib3JkZXItd2hpdGUvMTBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3N0b3JlRnJvbnR9IGFsdD1cIkZhY2hhZGEgQWRlbWljb24gUGlyYXF1YXJhXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzUwMHB4XSBvYmplY3QtY292ZXJcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by10IGZyb20tYWNjZW50LzkwIHRvLXRyYW5zcGFyZW50IGZsZXggaXRlbXMtZW5kIHAtOFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VyaWYgZm9udC1ib2xkIHRleHQtd2hpdGUgbWItMlwiPlZlbmhhIHRvbWFyIHVtIGNhZsOpIGNvbm9zY288L2g0PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTMwMFwiPk5vc3NhIGVzdHJ1dHVyYSBlbSBQaXJhcXVhcmEgZm9pIGZlaXRhIHBhcmEgdGUgcmVjZWJlciBjb20gY29uZm9ydG8uPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgey8qIDYuIEdlc3RvciAqL31cbiAgICAgIDxzZWN0aW9uIGlkPVwiZ2VzdG9yXCIgY2xhc3NOYW1lPVwicHktMjQgYmctc2xhdGUtNTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtM3hsIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS0xMDAgZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTUvMTIgcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e21hbmFnZXJQaG90b30gYWx0PVwiR2VzdG9yIGRhIFVuaWRhZGVcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlciBtaW4taC1bNDAwcHhdIG9iamVjdC10b3BcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1hY2NlbnQvOTAgdG8tdHJhbnNwYXJlbnQgcC02IHRleHQtd2hpdGUgbWQ6aGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+RXZlcnRvbiBDZXJiZWxvPC9oND5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSBmb250LW1lZGl1bVwiPkdlc3RvciBSZWdpb25hbCBBZGVtaWNvbjwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy03LzEyIHAtOCBtZDpwLTE2IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2sgbWItOFwiPlxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlcmlmIGZvbnQtYm9sZCB0ZXh0LWFjY2VudCBtYi0yXCI+RXZlcnRvbiBDZXJiZWxvPC9oND5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZm9udC1ib2xkIHRyYWNraW5nLXdpZGUgdXBwZXJjYXNlIHRleHQtc21cIj5HZXN0b3IgUmVnaW9uYWwgQWRlbWljb24gUGlyYXF1YXJhPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPVwidy0xMiBoLTEyIHRleHQtc2xhdGUtMjAwIG1iLTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAzMiAzMlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOS4zNTIgNEM0LjQ1NiA3LjQ1NiAxIDEzLjEyIDEgMTkuMzZjMCA1LjA4OCAzLjA3MiA4LjA2NCA2LjYyNCA4LjA2NCAzLjM2IDAgNS44NTYtMi42ODggNS44NTYtNS44NTYgMC0zLjE2OC0yLjIwOC01LjQ3Mi01LjA4OC01LjQ3Mi0uNTc2IDAtMS4zNDQuMDk2LTEuNTM2LjE5Mi40OC0zLjI2NCAzLjU1Mi03LjEwNCA2LjYyNC05LjAyNEw5LjM1MiA0em0xNi41MTIgMGMtNC44IDMuNDU2LTguMjU2IDkuMTItOC4yNTYgMTUuMzYgMCA1LjA4OCAzLjA3MiA4LjA2NCA2LjYyNCA4LjA2NCAzLjI2NCAwIDUuODU2LTIuNjg4IDUuODU2LTUuODU2IDAtMy4xNjgtMi4zMDQtNS40NzItNS4xODQtNS40NzItLjU3NiAwLTEuMjQ4LjA5Ni0xLjQ0LjE5Mi40OC0zLjI2NCAzLjQ1Ni03LjEwNCA2LjUyOC05LjAyNEwyNS44NjQgNHpcIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxibG9ja3F1b3RlIGNsYXNzTmFtZT1cInRleHQteGwgbWQ6dGV4dC0yeGwgZm9udC1zZXJpZiB0ZXh0LXNsYXRlLTcwMCBsZWFkaW5nLXJlbGF4ZWQgbWItOCBpdGFsaWNcIj5cbiAgICAgICAgICAgICAgICBcIkFjcmVkaXRhbW9zIHF1ZSBvIHBsYW5lamFtZW50byDDqSBhIHBvbnRlIG1haXMgc2VndXJhIGVudHJlIG9zIHNldXMgc29uaG9zIGRlIGhvamUgZSBvIHNldSBwYXRyaW3DtG5pbyBkZSBhbWFuaMOjLiBOb3NzYSBlcXVpcGUgbsOjbyBkZXNjYW5zYSBhdMOpIHZlciBhIHN1YSBjaGF2ZSBuYSBtw6NvLlwiXG4gICAgICAgICAgICAgIDwvYmxvY2txdW90ZT5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBhc0NoaWxkIHNpemU9XCJsZ1wiIGNsYXNzTmFtZT1cImJnLWFjY2VudCBob3ZlcjpiZy1hY2NlbnQvOTAgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17V0hBVFNBUFBfTElOS30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgICBGYWxhciBjb20gbyBHZXN0b3JcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiA3LiBDb21vIGZ1bmNpb25hICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktMjQgYmctd2hpdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1heC13LTJ4bCBteC1hdXRvIG1iLTE2XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC00eGwgZm9udC1zZXJpZiBmb250LWJvbGQgdGV4dC1hY2NlbnQgbWItNlwiPk8gY2FtaW5obyBwYXJhIGEgc3VhIGNvbnF1aXN0YTwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTYwMCB0ZXh0LWxnXCI+VW0gcHJvY2Vzc28gc2ltcGxlcywgdHJhbnNwYXJlbnRlIGUgZ3VpYWRvIHBlbGEgbm9zc2EgZXF1aXBlIGVtIGNhZGEgZXRhcGEuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy00IGdhcC04IHJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9jayBhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtWzEwJV0gcmlnaHQtWzEwJV0gaC0wLjUgYmctc2xhdGUtMTAwIC10cmFuc2xhdGUteS0xLzIgei0wXCI+PC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIHsgbnVtOiBcIjAxXCIsIHRpdGxlOiBcIkNvbnN1bHRvcmlhXCIsIGRlc2M6IFwiQW7DoWxpc2UgZG8gc2V1IG9iamV0aXZvIGUgY2FwYWNpZGFkZSBmaW5hbmNlaXJhLlwiIH0sXG4gICAgICAgICAgICAgIHsgbnVtOiBcIjAyXCIsIHRpdGxlOiBcIkVzdHJhdMOpZ2lhXCIsIGRlc2M6IFwiRXNjb2xoYSBkbyBtZWxob3IgZ3J1cG8gZSBwbGFubyBkZSBsYW5jZXMuXCIgfSxcbiAgICAgICAgICAgICAgeyBudW06IFwiMDNcIiwgdGl0bGU6IFwiQXNzZW1ibGVpYVwiLCBkZXNjOiBcIkFjb21wYW5oYW1lbnRvIG1lbnNhbCBwYXJhIHNvcnRlaW9zIGUgbGFuY2VzLlwiIH0sXG4gICAgICAgICAgICAgIHsgbnVtOiBcIjA0XCIsIHRpdGxlOiBcIkNvbnF1aXN0YVwiLCBkZXNjOiBcIkNhcnRhIGRlIGNyw6lkaXRvIGxpYmVyYWRhLiBPIGJlbSDDqSBzZXUhXCIgfVxuICAgICAgICAgICAgXS5tYXAoKHN0ZXAsIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTYgaC0xNiByb3VuZGVkLWZ1bGwgYmctd2hpdGUgYm9yZGVyLTQgYm9yZGVyLXNsYXRlLTUwIHNoYWRvdy1tZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXByaW1hcnkgbWItNiByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAge3N0ZXAubnVtfVxuICAgICAgICAgICAgICAgICAge2kgPCAzICYmIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrIGFic29sdXRlIHctZnVsbCBoLTAuNSBiZy1wcmltYXJ5LzIwIHRvcC0xLzIgLXJpZ2h0LWZ1bGwgLXRyYW5zbGF0ZS15LTEvMiAtei0xMFwiPjwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgdGV4dC1hY2NlbnQgbWItMlwiPntzdGVwLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS02MDBcIj57c3RlcC5kZXNjfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiA4LiBEZXBvaW1lbnRvcyAqL31cbiAgICAgIDxzZWN0aW9uIGlkPVwiZGVwb2ltZW50b3NcIiBjbGFzc05hbWU9XCJweS0yNCBiZy1zbGF0ZS01MCBib3JkZXItdCBib3JkZXItc2xhdGUtMjAwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtZDpweC02XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYXgtdy0yeGwgbXgtYXV0byBtYi0xNlwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtc2VyaWYgZm9udC1ib2xkIHRleHQtYWNjZW50IG1iLTZcIj5RdWVtIHBsYW5lamEsIGNvbnF1aXN0YTwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTYwMCB0ZXh0LWxnXCI+SGlzdMOzcmlhcyByZWFpcyBkZSBjbGllbnRlcyBxdWUgY29uZmlhcmFtIG5hIEFkZW1pY29uIFBpcmFxdWFyYS48L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgZ2FwLThcIj5cbiAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlRlbnRhbW9zIGZpbmFuY2lhbWVudG8gZSBhcyB0YXhhcyBlcmFtIGFic3VyZGFzLiBBIEVxdWlwZSBDZXJiZWxvIG1vbnRvdSB1bSBwbGFubyBwZXJmZWl0byBwYXJhIG8gbm9zc28gb3LDp2FtZW50by4gSG9qZSBlc3RhbW9zIG5hIG5vc3NhIGNhc2EgcHLDs3ByaWEuXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJSb2JlcnRvIGUgTWFyaWFuYVwiLFxuICAgICAgICAgICAgICAgIGxvYzogXCJQaXJhcXVhcmEsIFBSXCIsXG4gICAgICAgICAgICAgICAgaW5pdGlhbHM6IFwiUk1cIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJVc28gbyBjb25zw7NyY2lvIEFkZW1pY29uIGNvbW8gaW52ZXN0aW1lbnRvIGjDoSA1IGFub3MuIFNlbXByZSBmdWkgbXVpdG8gYmVtIG9yaWVudGFkbyBwZWxvIEFuZGVyc29uIGUgZXF1aXBlLiBBIHJlbnRhYmlsaWRhZGUgcGF0cmltb25pYWwgw6kgZXhjZWxlbnRlLlwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2FybG9zIEVkdWFyZG9cIixcbiAgICAgICAgICAgICAgICBsb2M6IFwiUGluaGFpcywgUFJcIixcbiAgICAgICAgICAgICAgICBpbml0aWFsczogXCJDRVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkNvbnNlZ3VpIHRyb2NhciBhIGZyb3RhIGRhIG1pbmhhIHBlcXVlbmEgZW1wcmVzYSBhdHJhdsOpcyBkZSB1bSBncnVwbyBxdWUgbyBjb25zdWx0b3IgbWUgaW5kaWNvdS4gTyBsYW5jZSBmb2kgY2VydGVpcm8uIEF0ZW5kaW1lbnRvIG5vdGEgMTAwMC5cIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkp1bGlhbmEgTWVuZGVzXCIsXG4gICAgICAgICAgICAgICAgbG9jOiBcIlBpcmFxdWFyYSwgUFJcIixcbiAgICAgICAgICAgICAgICBpbml0aWFsczogXCJKTVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0ubWFwKCh0ZXN0LCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiBpICogMC4xIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC04IHJvdW5kZWQtMnhsIHNoYWRvdy1zbSBib3JkZXIgYm9yZGVyLXNsYXRlLTEwMCBmbGV4IGZsZXgtY29sXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LWFtYmVyLTQwMCBtYi02XCI+XG4gICAgICAgICAgICAgICAgICB7J+KYheKYheKYheKYheKYhScuc3BsaXQoJycpLm1hcCgocywgaWR4KSA9PiA8c3BhbiBrZXk9e2lkeH0+e3N9PC9zcGFuPil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS03MDAgaXRhbGljIG1iLTggbWluLWgtWzEwMHB4XSBmbGV4LWdyb3dcIj5cInt0ZXN0LnRleHR9XCI8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC1mdWxsIGJnLWFjY2VudCB0ZXh0LXdoaXRlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtYm9sZCBmb250LXNlcmlmXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0ZXN0LmluaXRpYWxzfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtYWNjZW50XCI+e3Rlc3QubmFtZX08L2g1PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNTAwXCI+e3Rlc3QubG9jfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiA5LiBMb2phICovfVxuICAgICAgPHNlY3Rpb24gaWQ9XCJsb2phXCIgY2xhc3NOYW1lPVwicHktMjQgYmctd2hpdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IG1kOnB4LTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTEyIGJnLXNsYXRlLTUwIHJvdW5kZWQtM3hsIG92ZXJmbG93LWhpZGRlbiBib3JkZXIgYm9yZGVyLXNsYXRlLTEwMCBzaGFkb3ctc21cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy0xLzIgcC04IG1kOnAtMTIgbGc6cC0xNiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0cmFja2luZy13aWRlciB0ZXh0LXByaW1hcnkgdXBwZXJjYXNlIG1iLTNcIj5Ob3NzYSBVbmlkYWRlPC9oMj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtM3hsIG1kOnRleHQtNHhsIGZvbnQtc2VyaWYgZm9udC1ib2xkIHRleHQtYWNjZW50IG1iLThcIj5WZW5oYSBub3MgZmF6ZXIgdW1hIHZpc2l0YTwvaDM+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNiBtYi04XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICA8TWFwUGluIGNsYXNzTmFtZT1cInctNiBoLTYgdGV4dC1wcmltYXJ5IHNocmluay0wIG10LTFcIiAvPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXNsYXRlLTkwMFwiPkVuZGVyZcOnbzwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNjAwIG10LTFcIj5SLiBCYXLDo28gZG8gQ2Vycm8gQXp1bCwgMTg2OTxici8+U2FsYXMgMTYsIDE3IGUgMTggLSBDZW50cm88YnIvPlBpcmFxdWFyYSAtIFBSLCA4MzMwMS0wMTA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxDbG9jayBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtcHJpbWFyeSBzaHJpbmstMCBtdC0xXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zbGF0ZS05MDBcIj5Ib3LDoXJpbyBkZSBBdGVuZGltZW50bzwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNjAwIG10LTFcIj5TZWd1bmRhIGEgU2V4dGE6IDA4OjAwIOKAkyAxODowMDxici8+U8OhYmFkbzogMDg6MDAg4oCTIDEyOjAwPC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxQaG9uZSBjbGFzc05hbWU9XCJ3LTYgaC02IHRleHQtcHJpbWFyeSBzaHJpbmstMCBtdC0xXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1zbGF0ZS05MDBcIj5UZWxlZm9uZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6KzU1NDEzNTg5NDY5OVwiIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBmb250LXNlbWlib2xkIGhvdmVyOnVuZGVybGluZSBtdC0xIGJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgKDQxKSAzNTg5LTQ2OTlcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPEJ1dHRvbiBhc0NoaWxkIHNpemU9XCJsZ1wiIGNsYXNzTmFtZT1cInctZnVsbCBzbTp3LWF1dG8gYmctZ3JlZW4tNjAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17V0hBVFNBUFBfTElOS30gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgPEZhV2hhdHNhcHAgY2xhc3NOYW1lPVwidGV4dC14bCBtci0yXCIgLz4gQWdlbmRhciB1bWEgdmlzaXRhXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctMS8yIGgtWzQwMHB4XSBsZzpoLWF1dG9cIj5cbiAgICAgICAgICAgICAgPGlmcmFtZSBcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQzNjAzLjIyMDU1NjI3MjU1NCEyZC00OS4wNjY0OTcxMjM4Njk5MSEzZC0yNS40MzA4NzA5MzM1MjcyNjYhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDk0ZGNlOTVlMGM1NTU1NTUlM0EweDZmYjhmOGE4NDYxNWU0NWEhMnNSLiUyMEJhciVDMyVBM28lMjBkbyUyMENlcnJvJTIwQXp1bCUyQyUyMDE4NjklMjAtJTIwQ2VudHJvJTJDJTIwUGlyYXF1YXJhJTIwLSUyMFBSJTJDJTIwODMzMDEtMDEwITVlMCEzbTIhMXNwdC1CUiEyc2JyITR2MTcwMDAwMDAwMDAwMCE1bTIhMXNwdC1CUiEyc2JyXCIgXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCIgXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiIFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlcjogMCB9fSBcbiAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW49e3RydWV9IFxuICAgICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCIgXG4gICAgICAgICAgICAgICAgcmVmZXJyZXJQb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JheXNjYWxlLVswLjJdIGNvbnRyYXN0LVswLjldIG9wYWNpdHktOTBcIlxuICAgICAgICAgICAgICA+PC9pZnJhbWU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiAxMC4gRm9ybS9DVEEgKi99XG4gICAgICA8c2VjdGlvbiBpZD1cImNvbnRhdG9cIiBjbGFzc05hbWU9XCJweS0yNCBiZy1hY2NlbnQgdGV4dC13aGl0ZSByZWxhdGl2ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgdy0xLzIgaC1mdWxsIGJnLXByaW1hcnkvMTAgYmx1ci0zeGwgcm91bmRlZC1mdWxsXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBtZDpweC02IHJlbGF0aXZlIHotMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTV4bCBteC1hdXRvIGZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTEyIGJnLXNsYXRlLTgwMC81MCBiYWNrZHJvcC1ibHVyLXNtIGJvcmRlciBib3JkZXItd2hpdGUvMTAgcm91bmRlZC0zeGwgcC04IG1kOnAtMTIgc2hhZG93LTJ4bFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp3LTEvMiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIGxnOnRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC01eGwgZm9udC1zZXJpZiBmb250LWJvbGQgbWItNCB0ZXh0LXdoaXRlXCI+RMOqIG8gcHJpbWVpcm8gcGFzc28gaG9qZS48L2gyPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtc2xhdGUtMzAwIG1iLThcIj5WYWdhcyBsaW1pdGFkYXMgcGFyYSBwbGFuZWphbWVudG8gcGVyc29uYWxpemFkbyBncmF0dWl0byBlc3RlIG3DqnMuIEZhbGUgY29tIGEgRXF1aXBlIENlcmJlbG8gZSBkZXNjdWJyYSBhIGVzdHJhdMOpZ2lhIGlkZWFsIHBhcmEgbyBzZXUgcGF0cmltw7RuaW8uPC9wPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTQgbWItOCBoaWRkZW4gbGc6YmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHRleHQtc2xhdGUtMzAwXCI+XG4gICAgICAgICAgICAgICAgICA8U2hpZWxkQ2hlY2sgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXNlY29uZGFyeVwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5TZXVzIGRhZG9zIGVzdMOjbyBzZWd1cm9zIGNvbm9zY288L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMyB0ZXh0LXNsYXRlLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgPFRyZW5kaW5nVXAgY2xhc3NOYW1lPVwidy01IGgtNSB0ZXh0LXNlY29uZGFyeVwiIC8+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5BbGF2YW5jYWdlbSBjb20gZm9jbyBlbSByZXN1bHRhZG9zPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnctMS8yIGJnLXdoaXRlIHJvdW5kZWQtMnhsIHAtNiBtZDpwLTggdGV4dC1zbGF0ZS05MDAgc2hhZG93LXhsXCI+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1hY2NlbnQgbWItNiB0ZXh0LWNlbnRlclwiPkluaWNpZSBzdWEgc2ltdWxhw6fDo288L2gzPlxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzcGFjZS15LTRcIiBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oV0hBVFNBUFBfTElOSywgJ19ibGFuaycpO1xuICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS03MDAgbWItMVwiPk5vbWUgY29tcGxldG88L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMyByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wcmltYXJ5IGZvY3VzOmJvcmRlci10cmFuc3BhcmVudCB0cmFuc2l0aW9uLWFsbFwiIHBsYWNlaG9sZGVyPVwiQ29tbyBwcmVmZXJlIHNlciBjaGFtYWRvP1wiIHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNzAwIG1iLTFcIj5UZWxlZm9uZSAvIFdoYXRzQXBwPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTQgcHktMyByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1wcmltYXJ5IGZvY3VzOmJvcmRlci10cmFuc3BhcmVudCB0cmFuc2l0aW9uLWFsbFwiIHBsYWNlaG9sZGVyPVwiKDQxKSA5MDAwMC0wMDAwXCIgcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS03MDAgbWItMVwiPsOBcmVhIGRlIGludGVyZXNzZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInctZnVsbCBweC00IHB5LTMgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctcHJpbWFyeSBmb2N1czpib3JkZXItdHJhbnNwYXJlbnQgdHJhbnNpdGlvbi1hbGxcIiByZXF1aXJlZCBkZWZhdWx0VmFsdWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkPlNlbGVjaW9uZSB1bSBvYmpldGl2bzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW1vdmVsXCI+SW3Ds3ZlaXMgKENvbXByYSwgUmVmb3JtYSwgQ29uc3RydcOnw6NvKTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidmVpY3Vsb1wiPlZlw61jdWxvcyAoQ2Fycm9zLCBNb3RvcywgUGVzYWRvcyk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNlcnZpY29cIj5TZXJ2acOnb3M8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImludmVzdGltZW50b1wiPkludmVzdGltZW50byBlIEFsYXZhbmNhZ2VtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBzaXplPVwibGdcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctZ3JlZW4tNjAwIGhvdmVyOmJnLWdyZWVuLTcwMCB0ZXh0LXdoaXRlIGgtMTQgdGV4dC1iYXNlIGZvbnQtYm9sZCBtdC00IHNoYWRvdy1tZCBzaGFkb3ctZ3JlZW4tNjAwLzIwXCI+XG4gICAgICAgICAgICAgICAgICA8RmFXaGF0c2FwcCBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgUXVlcm8gZmFsYXIgY29tIHVtIGNvbnN1bHRvclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHsvKiAxMS4gRm9vdGVyICovfVxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1zbGF0ZS05NTAgdGV4dC1zbGF0ZS00MDAgcHktMTYgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTkwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgbWQ6cHgtNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtNCBnYXAtMTIgbWItMTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMlwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gYWx0PVwiQWRlbWljb24gRXF1aXBlIENlcmJlbG9cIiBjbGFzc05hbWU9XCJoLTI4IG9iamVjdC1jb250YWluIG1iLTZcIiAvPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIG1heC13LXNtIG1iLTYgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgQSBBZGVtaWNvbiBQaXJhcXVhcmEgLSBFcXVpcGUgQ2VyYmVsbyBhdHVhIG5vIG1lcmNhZG8gZGUgY29uc8OzcmNpb3MgZSBpbnZlc3RpbWVudG9zIG9mZXJlY2VuZG8gcGxhbmVqYW1lbnRvIGZpbmFuY2Vpcm8gc2VndXJvIGUgdHJhbnNwYXJlbnRlIHBhcmEgYSBjb25xdWlzdGEgZG9zIHNldXMgbWFpb3JlcyBvYmpldGl2b3MuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00XCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsIGJnLXNsYXRlLTkwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgIDxGYUluc3RhZ3JhbSBjbGFzc05hbWU9XCJ0ZXh0LXhsXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsIGJnLXNsYXRlLTkwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1jb2xvcnNcIj5cbiAgICAgICAgICAgICAgICAgIDxGYUZhY2Vib29rIGNsYXNzTmFtZT1cInRleHQteGxcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIG1iLTYgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtc21cIj5MaW5rcyBSw6FwaWRvczwvaDQ+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTMgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvKCdpbmljaW8nKX0gY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzXCI+SW7DrWNpbzwvYnV0dG9uPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxidXR0b24gb25DbGljaz17KCkgPT4gc2Nyb2xsVG8oJ3NvbHVjb2VzJyl9IGNsYXNzTmFtZT1cImhvdmVyOnRleHQtcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9yc1wiPlNvbHXDp8O1ZXMgZW0gQ29uc8OzcmNpbzwvYnV0dG9uPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxidXR0b24gb25DbGljaz17KCkgPT4gc2Nyb2xsVG8oJ2RpZmVyZW5jaWFpcycpfSBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXByaW1hcnkgdHJhbnNpdGlvbi1jb2xvcnNcIj5Qb3IgcXVlIGEgRXF1aXBlIENlcmJlbG88L2J1dHRvbj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvKCdnZXN0b3InKX0gY2xhc3NOYW1lPVwiaG92ZXI6dGV4dC1wcmltYXJ5IHRyYW5zaXRpb24tY29sb3JzXCI+Tm9zc28gR2VzdG9yPC9idXR0b24+PC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGQgbWItNiB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1zbVwiPkNvbnRhdG88L2g0PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS0zIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICA8bGk+Ui4gQmFyw6NvIGRvIENlcnJvIEF6dWwsIDE4Njk8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5TYWxhcyAxNiwgMTcgZSAxOCAtIENlbnRybzwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlBpcmFxdWFyYSAtIFBSPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHQtMlwiPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDorNTU0MTM1ODk0Njk5XCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGhvdmVyOnRleHQtcHJpbWFyeSB0cmFuc2l0aW9uLWNvbG9yc1wiPig0MSkgMzU4OS00Njk5PC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTggYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTkwMCB0ZXh0LXhzIHRleHQtc2xhdGUtNTAwIGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBnYXAtNCB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgIDxwPkFkZW1pY29uIENvbnPDs3JjaW9zIGUgSW52ZXN0aW1lbnRvcy4gQ05QSjogMTQuMzQxLjAwMi8wMDAxLTQ0LiBBdXRvcml6YWRvIHBlbG8gQkFDRU4uPC9wPlxuICAgICAgICAgICAgPHA+JmNvcHk7IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IEVxdWlwZSBDZXJiZWxvLiBUb2RvcyBvcyBkaXJlaXRvcyByZXNlcnZhZG9zLjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJmaWxlIjoiL2hvbWUvcnVubmVyL3dvcmtzcGFjZS9hcnRpZmFjdHMvbGFuZGluZy1wYWdlL3NyYy9wYWdlcy9MYW5kaW5nUGFnZS50c3gifQ==