"use client"

import { useState } from "react"
import { ChevronDown, Menu, Phone, Mail, MapPin, Clock, FileText, Search, Users, Scale } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import "./styles/homepage.css"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { name: "गृहपृष्ठ", href: "#home" },
    {
      name: "सेवाहरू",
      href: "#services",
      dropdown: [
        { name: "उजुरी दर्ता", href: "/complaint-registration" },
        { name: "उजुरी ट्र्याक", href: "/complaint-tracking" },
      ],
    },
    { name: "सदस्यहरू", href: "#members" },
    {
      name: "मध्यस्थकर्ता",
      href: "#mediator",
      dropdown: [
        { name: "मध्यस्थकर्ता दर्ता", href: "/matchmaker-registration" },
        { name: "मध्यस्थकर्ताहरू हेर्नुहोस्", href: "/matchmakers" },
      ],
    },
    {
      name: "जानकारी",
      href: "#info",
      dropdown: [
        { name: "नियमावली", href: "#rules" },
        { name: "प्रक्रिया", href: "#process" },
      ],
    },
    { name: "सम्पर्क", href: "#contact" },
    { name: "FAQ", href: "#faq" },
  ]

  const members = [
    {
      name: "श्रीमती रिमू चौधरी",
      designation: "उजुरी प्रशासक",
      photo: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "श्री सरोज कुमार झा",
      designation: "न्यायिक समिति सदस्य",
      photo: "/placeholder.svg?height=200&width=200",
    },
  ]

  const faqData = [
    {
      question: "न्यायिक समितिमा कसरी उजुरी दर्ता गर्ने?",
      answer:
        "तपाईं हाम्रो अनलाइन पोर्टल मार्फत वा कार्यालयमा प्रत्यक्ष आएर उजुरी दर्ता गर्न सक्नुहुन्छ। आवश्यक कागजातहरू र विवरणहरू तयार राख्नुहोस्।",
    },
    {
      question: "उजुरीको स्थिति कसरी जान्ने?",
      answer: "तपाईंको उजुरी नम्बर प्रयोग गरेर हाम्रो ट्र्याकिङ सिस्टममा जाँच गर्न सक्नुहुन्छ। SMS र इमेल मार्फत पनि अपडेट पाउनुहुनेछ।",
    },
    {
      question: "न्यायिक समितिको अधिकारक्षेत्र के हो?",
      answer:
        "स्थानीय विवाद समाधान, सानातिना फौजदारी मुद्दा, र नागरिक अधिकार सम्बन्धी विषयहरूमा न्यायिक समितिको अधिकारक्षेत्र छ।",
    },
    {
      question: "निर्णयको बिरुद्ध पुनरावेदन गर्न सकिन्छ?",
      answer:
        "हो, न्यायिक समितिको निर्णयको बिरुद्ध जिल्ला अदालतमा पुनरावेदन गर्न सकिन्छ। निर्णयको मितिले ३५ दिन भित्र पुनरावेदन गर्नुपर्छ।",
    },
  ]

  return (
    <div className="homepage">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          {/* Logo - Text Only */}
          <div className="nav-logo">
            <div className="nav-logo-text">
              <h1>न्यायिक समिति</h1>
              <p>इजलास गाउँपालिका</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-menu">
            {navigationItems.map((item, index) => (
              <div key={index} className="nav-item">
                <Link href={item.href} className="nav-link">
                  {item.name}
                  {item.dropdown && <ChevronDown className="nav-chevron" />}
                </Link>
                {item.dropdown && (
                  <div className="nav-dropdown">
                    {item.dropdown.map((dropItem, dropIndex) => (
                      <Link key={dropIndex} href={dropItem.href} className="nav-dropdown-item">
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="menu-icon" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            {navigationItems.map((item, index) => (
              <div key={index} className="mobile-menu-item">
                <Link href={item.href} className="mobile-menu-link" onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="mobile-dropdown">
                    {item.dropdown.map((dropItem, dropIndex) => (
                      <Link
                        key={dropIndex}
                        href={dropItem.href}
                        className="mobile-dropdown-item"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">न्यायिक समिति इजलास</h1>
          <p className="hero-subtitle">इलेक्ट्रोनिक उजुरी व्यवस्थापन पोर्टल</p>
          <p className="hero-description">
            न्याय र पारदर्शिताको साथ सेवा प्रदान गर्दै, तपाईंका समस्याहरूको द्रुत र प्रभावकारी समाधान
          </p>

          <div className="hero-buttons">
            <Link href="/complaint-registration" className="btn btn-secondary btn-lg hero-btn">
              <FileText className="btn-icon" />
              उजुरी दर्ता गर्नुहोस्
            </Link>
            <Link href="/complaint-tracking" className="btn btn-outline btn-lg hero-btn">
              <Search className="btn-icon" />
              उजुरी ट्र्याक गर्नुहोस्
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-header">
            <h2 className="stats-title">हाम्रो उपलब्धि</h2>
            <p className="stats-subtitle">तथ्याङ्कमा हाम्रो सेवा</p>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon stat-icon-blue">
                <MapPin className="icon" />
              </div>
              <div className="stat-number">९</div>
              <div className="stat-label">कुल वडा संख्या</div>
            </div>

            <div className="stat-item">
              <div className="stat-icon stat-icon-red">
                <FileText className="icon" />
              </div>
              <div className="stat-number">२४७</div>
              <div className="stat-label">कुल मुद्दा संख्या</div>
            </div>

            <div className="stat-item">
              <div className="stat-icon stat-icon-blue">
                <Scale className="icon" />
              </div>
              <div className="stat-number">२२१</div>
              <div className="stat-label">समाधान भएका मुद्दा</div>
            </div>

            <div className="stat-item">
              <div className="stat-icon stat-icon-red">
                <Users className="icon" />
              </div>
              <div className="stat-number">१२</div>
              <div className="stat-label">मध्यस्थकर्ता संख्या</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            {/* Left Column - About Description */}
            <div className="about-content">
              <h2 className="about-title">हाम्रो बारेमा</h2>
              <div className="about-text">
                <p>
                  न्यायिक समिति एक समर्पित न्यायिक समिति हो जुन स्थानीय विवादहरूलाई निष्पक्ष, प्रभावकारी र पारदर्शितापूर्वक समाधान गर्न प्रतिबद्ध छ। यसमा अनुभवी कानूनी विशेषज्ञहरू, समुदायका प्रतिनिधिहरू र मध्यस्थहरू समावेश छन्, जसले एकसाथ मिलेर तह स्तरमा न्याय सुनिश्चित गर्ने काम गर्दछन्। उनीहरूको मुख्य भूमिका विवादहरूलाई मध्यस्थता गर्नु, कानूनी सल्लाह दिनु, र विवाद समाधान प्रक्रियामा पारदर्शिता प्रवर्द्धन गर्नु हो, जसले हरेक व्यक्तिलाई, चाहे उनको पृष्ठभूमि कस्तो भए तापनि, उचित व्यवहार र निष्पक्ष सुनुवाइको पहुँच उपलब्ध गराउँछ।
                </p>
                <p>
                  समिति समुदायसँग सक्रिय रूपमा संलग्न रहन्छ ताकि विवादका जटिलताहरूलाई बुझ्न सकियोस् र एउटा संरचित, तर सहज पहुँचयोग्य मंच उपलब्ध गराउन सकियोस् जहाँ गुनासोहरू बिना ढिलाइ सम्बोधन गर्न सकिन्छ। लामो औपचारिक कानूनी कार्यवाहिमा विकल्पको रूपमा, न्यायिक समितिले व्यक्तिहरू र परिवारहरूलाई छिटो र मैत्रीपूर्ण समाधान खोज्न सहयोग पुर्‍याउँछ, जसले सामाजिक तनावलाई कम गर्दै समुदायमा सहकार्य र विश्वासलाई बलियो बनाउँछ।
                </p>
                <div className="about-features">
                  <div className="feature-item">
                    <Scale className="feature-icon" />
                    <span>न्यायपूर्ण</span>
                  </div>
                  <div className="feature-item">
                    <Users className="feature-icon" />
                    <span>पारदर्शी</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Chairperson Profile */}
            <div className="chairperson-card">
              <div className="card">
                <div className="card-content chairperson-content">
                  <div className="chairperson-photo">
                    <Image
                      src="/placeholder.svg?height=128&width=128"
                      alt="Chairperson"
                      width={128}
                      height={128}
                      className="photo-image"
                    />
                  </div>
                  <h3 className="chairperson-name">श्रीमती फुल कुमारी साह</h3>
                  <p className="chairperson-title">न्यायिक समिति उपाध्यक्ष</p>
                  <blockquote className="chairperson-quote">
                    "न्याय र सत्यको पक्षमा उभिएर हामी जनताको सेवा गर्छौं। प्रत्येक उजुरीलाई गम्भीरताका साथ लिएर निष्पक्ष न्याय प्रदान
                    गर्नु हाम्रो दायित्व हो।"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="members-section">
        <div className="container">
          <div className="members-header">
            <h2 className="members-title">समिति सदस्यहरू</h2>
            <p className="members-subtitle">अनुभवी र योग्य व्यक्तिहरूको टोलीले न्यायिक समितिको नेतृत्व गर्दै</p>
          </div>

          <div className="members-grid">
            {members.map((member, index) => (
              <div key={index} className="member-card">
                <div className="card">
                  <div className="card-content member-content">
                    <div className="member-photo">
                      <Image
                        src={member.photo || "/placeholder.svg"}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="member-image"
                      />
                    </div>
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-designation">{member.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <h2 className="faq-title">बारम्बार सोधिने प्रश्नहरू</h2>
            <p className="faq-subtitle">तपाईंका सामान्य प्रश्नहरूका उत्तरहरू</p>
          </div>

          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="accordion-item">
                  <button className="accordion-trigger">{faq.question}</button>
                  <div className="accordion-content">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Office Address */}
            <div className="footer-section">
              <h3 className="footer-title">कार्यालय ठेगाना</h3>
              <div className="footer-content">
                <div className="address-item">
                  <MapPin className="address-icon" />
                  <div className="address-text">
                    <p>तिलाठी कोईलाडी, नेपाल</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Links */}
            <div className="footer-section">
              <h3 className="footer-title">महत्वपूर्ण लिङ्कहरू</h3>
              <ul className="footer-links">
                <li>
                  <Link href="#" className="footer-link">
                    गाउँपालिका
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    जिल्ला अदालत
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    कानुन मन्त्रालय
                  </Link>
                </li>
                <li>
                  <Link href="#" className="footer-link">
                    नेपाल सरकार
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="footer-section">
              <h3 className="footer-title">सम्पर्क जानकारी</h3>
              <div className="footer-content">
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <span>+977-9827758718</span>
                </div>
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <span>contact@tilathikoiladimun.gov.np</span>
                </div>
              </div>
            </div>

            {/* Office Timings */}
            <div className="footer-section">
              <h3 className="footer-title">कार्यालय समय</h3>
              <div className="footer-content">
                <div className="timing-item">
                  <Clock className="timing-icon" />
                  <div className="timing-text">
                    <p>आइतबार - बिहीबार</p>
                    <p>बिहान १०:०० - साँझ ५:००</p>
                    <p className="mt-2">शुक्रबार</p>
                    <p>बिहान १०:०० - दिउँसो ३:००</p>
                    <p className="weekend">शनिबार बिदा</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-copyright">
            <p>© तिलाठी कोईलाडी २०२४ न्यायिक समिति इजलास गाउँपालिका। सबै अधिकार सुरक्षित।</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
