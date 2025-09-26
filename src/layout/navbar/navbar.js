'use client';

import { useRef, useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import TopNavbar from './Topnavbar';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);     // PRODUCTS, SERVICES
  const [openSubDropdown, setOpenSubDropdown] = useState(null); // e.g., Test weights
  const [hoveredColumn, setHoveredColumn] = useState(null);  // Track which column is hovered
  const closeMainRef = useRef(null);
  const closeSubRef = useRef(null);

  const openMain = (menu) => {
    if (closeMainRef.current) { clearTimeout(closeMainRef.current); }
    setOpenDropdown(menu);
    setOpenSubDropdown(null);
  };
  const scheduleCloseMain = () => {
    if (closeMainRef.current) { clearTimeout(closeMainRef.current); }
    closeMainRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setOpenSubDropdown(null);
      setHoveredColumn(null);
    }, 180);
  };

  const openSub = (menu) => {
    if (closeSubRef.current) { clearTimeout(closeSubRef.current); }
    setOpenSubDropdown(menu);
  };
  const scheduleCloseSub = () => {
    if (closeSubRef.current) { clearTimeout(closeSubRef.current); }
    closeSubRef.current = setTimeout(() => setOpenSubDropdown(null), 160);
  };

  const handleColumnHover = (columnName) => {
    setHoveredColumn(columnName);
  };

  const handleColumnLeave = () => {
    setHoveredColumn(null);
  };

  const navItems = [
    { name: 'HOME', href: '/', isDropdown: false },
    { name: 'ABOUT', href: '/about', isDropdown: false },
    {
      name: 'PRODUCTS',
      isDropdown: true,
      items: [
        {
          name: 'Test weights',
          items: [
            { name: 'Cylindrical shape 100g to 10kg', href: '/products/cylindrical-weights-100g-to-10kg' },
            { name: 'Rectangular shape adjusting cavity on the top ', href: '/products/calibration-weights-adjusting-cavity-on-top' },
            { name: ' Rectangular shape adjusting cavity in the handle', href: '/products/calibration-weights-adjusting-cavity-in-the-handle' },
            { name: ' Rectangular shape adjusting cavity at the bottom ', href: '/products/swpi-model-1-4b-calibration-weights-bottom-cavity-5kg-to-50kg' },
            { name: 'Hexagonal shape 50g to 2kg  as per  BIS', href: '/products/swpi-model-52-56-test-weights-hexagonal-50g-to-2kg' },
            { name: 'Hexagonal shape 5kg to 50kg as per  BIS', href: '/products/swpi-model-48-51-test-weights-hexagonal-5kg-to-50kg' },
            { name: 'Hexagonal shape 100g to 2kg as per  B.O.T', href: '/products/swpi-model-21-25-test-weights-hexagonal-100g-to-2kg' },
            { name: 'Rectangular shape adjusting cavity at the bottom 5 kg to 20 kg  as per  B.O.T', href: '/products/swpi-model-18-20-test-weights-rectangular-5kg-to-20kg' },
            { name: 'Rectangular shape 100 kg to 1000 kg as per  S.A.B.S', href: '/products/swpi-model-187-test-weights-rectangular-500kg-to-1000kg' },
          ],
        },
        {
          name: 'Standard weights',
          items: [
            { name: 'Rectangular shape 100kg to 1000kg', href: '/products/swpi-model-26-27a-standard-weights-rectangular-100kg-to-1000kg' },
            { name: 'Cylindrical shape suitable for rolling', href: '/products/cylindrical-weights-rolling-100kg-to-1000kg' },
            { name: 'Ⅰ  shape suitable for forklift & crane lifting ', href: '/products/swpi-model-26-27c-test-weights-forklift-crane-100kg-to-1000kg' },
            { name: 'Cylindrical  with handle suitable for  rolling & lifting ', href: '/products/swpi-model-26-27b-cylindrical-weights-lifting-rolling-100kg-to-1000kg' },
            { name: 'Fabricated  suitable for lifting by forklift ', href: '/products/fabricated-standard-weights-model-181-183' },
            { name: 'Fabricated  suitable for stacking & lifting by forklift', href: '/products/swpi-model-189-fabricated-standard-weights-forklift-100kg-to-1000kg' },
          ],
        },
        { name: 'Slotted Weights with hanger', href: '/products/swpi-model-87-93-slotted-weights-with-hanger-100g-to-20kg-1n-to-200n' },
        { name: 'Roller Weights', href: '/products/swpi-model-168-170-roller-weights-lifting-rolling-200kg-500kg' },
        { name: 'Cylindrical Weights as per Schengener States', href: '/products/model-no-swpi-171-176-cylindrical-weights-100g-to-10kg' },
        { name: 'Test Weight as per  OIML R-52 Hexagonal Shape', href: '/products/model-no-swpi-137-145-test-weights-100g-to-20kg' },
        {
          name: 'Avoirdupois Weights',
          items: [
            { name: 'Avoirdupois Weights 1/4 to 4lb Model No. SWPI : 125-133', href: '/products/avoirdupois-weights-model-no-swpi-125-133' },
            { name: 'Avoirdupois Weights 7lb to 56lb Model No. SWPI : 60-63', href: '/products/avoirdupois-weights-7-lb-to-56-lb-model-no-swpi-60-63' },
          ],
        },
        { name: 'Bell Weights', href: '/products/model-no-swpi-47-bell-weights-5g-to-500g' },
        { name: 'Proportional Weights', href: '/products/model-no-swpi-136-proportional-weights-ratio-100-1-and-50-1' },
      ],
    },
    {
      name: 'SERVICES',
      isDropdown: true,
      items: [
        {
          name: 'Calibration Services',
          items: [
            { name: 'Calibration of Weights', href: '/services/calibration-of-weights' },
            { name: 'Calibration of Weighing Scale and Balance', href: '/services/calibration-of-weighing-scale-and-balance' },
            { name: 'Sample Calibration Certificate', href: '/services/sample-calibration-certificate' },
          ],
        },
      ],
    },
    { name: 'BLOG', href: '/blog', isDropdown: false },
    { name: 'CONTACT', href: '/contact', isDropdown: false },
  ];

  return (
    <>
      <div className="mb-[15vh] lg:mb-[22vh]">
        <div className="fixed top-0 left-0 right-0 z-50">
          <TopNavbar />
          <nav className="bg-white shadow-sm w-full z-50  relative py-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
              <div className="flex justify-between h-16">
                {/* Logo */}
                <div className="flex items-center mt-0.5 w-70 lg:w-[40rem] xl:w-[38rem]">
                  <a href="/">
                    {/* <h2 className="text-lg lg:text-[27px] font-bold text-[#3b4047]">
                      Shanker Wire Products Industries
                    </h2> */}
                    <img  className=' h-[7vh] w-full lg:h-[10vh]  xl:h-[9vh] lg:w-full ' src ="/Images/shanker-wire/new-logoo.png"/>
                  </a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-3">
                  {navItems.map((item) =>
                    item.isDropdown ? (
                      <div
                        key={item.name}
                        className={item.name === 'PRODUCTS' || item.name === 'SERVICES' ? '' : 'relative'}
                        onMouseEnter={() => openMain(item.name)}
                        onMouseLeave={scheduleCloseMain}
                      >
                        <button className="text-[#3b4047] font-bold inline-flex items-center px-2 py-1 hover:border-b border-gray-500">
                          {item.name}
                          <ChevronDown className="ml-1 w-4 h-4" />
                        </button>

                        <AnimatePresence>
                          {openDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, y: -8 }}
                              
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.18 }}
                              className={`absolute top-full ${item.name === 'PRODUCTS' || item.name === 'SERVICES' ? 'left-1/2 -translate-x-1/2 w-full max-w-7xl rounded-md' : 'left-0 rounded-md'} bg-white shadow-lg z-50 overflow-visible border border-gray-200`}
                              onMouseEnter={() => openMain(item.name)}
                              onMouseLeave={scheduleCloseMain}
                            >
                              {/* HOVER BRIDGE from trigger -> dropdown (covers the tiny vertical gap) */}
                              <div className="absolute -top-2 left-0 w-full h-2" />

                              {/* PRODUCTS & SERVICES: show horizontal mega menu; others: keep simple list */}
                              {item.name === 'PRODUCTS' || item.name === 'SERVICES' ? (
                                <div
                                  className="w-full px-4 sm:px-6 lg:px-8 py-4 relative bg-cover bg-center"
                                  style={{ 
                                    backgroundImage: item.name === 'PRODUCTS' 
                                      ? "url('/Images/shanker-wire/products/best-weights-and-callabration-company-india.webp')"
                                      : "url('/Images/shanker-wire/calibration-certificate-for-weighing-scale-balance/certi1.webp')"
                                  }}
                                >
                                  <div className={`absolute inset-0 transition-colors duration-300 ${
                                    hoveredColumn === 'Test weights' ? 'bg-[#9e8f78]' :
                                    hoveredColumn === 'Standard weights' ? 'bg-[#5a8b9c]' :
                                    // hoveredColumn === 'Calibration Services' ? 'bg-[#6b8e23]' :
                                    hoveredColumn === 'More' ? 'bg-[#9aa9a6]' :
                                    'bg-[#80b5dd]'
                                  }`} />
                                  <div className="relative">
                                  {(() => {
                                    const groups = (item.items || []).filter((g) => g.items && g.items.length > 0);
                                    const singles = (item.items || []).filter((g) => !g.items);
                                    return (
                                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                                        {groups.map((group) => (
                                          <div 
                                            key={group.name} 
                                            className="min-w-[220px]"
                                            onMouseEnter={() => handleColumnHover(group.name)}
                                            onMouseLeave={handleColumnLeave}
                                          >
                                            <div className="px-2 pb-2 text-[#20598d] font-semibold border-b">{group.name}</div>
                                            <div className="pt-2">
                                              {group.items.map((link) => (
                                                <a
                                                  key={link.name}
                                                  href={link.href}
                                                  className="block px-2 py-2 text-[13px] text-[#3b4047] hover:bg-[#20598d] hover:text-white rounded"
                                                >
                                                  {link.name}
                                                </a>
                                              ))}
                                            </div>
                                          </div>
                                        ))}
                                        {singles.length > 0 && (
                                          <div 
                                            className="min-w-[220px]"
                                            onMouseEnter={() => handleColumnHover('More')}
                                            onMouseLeave={handleColumnLeave}
                                          >
                                            <div className="px-2 pb-2 text-[#20598d] font-semibold border-b">More</div>
                                            <div className="pt-2 grid grid-cols-1 gap-1">
                                              {singles.map((link) => (
                                                <a
                                                  key={link.name}
                                                  href={link.href}
                                                  className="block px-2 py-2 text-[13px] text-[#3b4047] hover:bg-[#20598d] hover:text-white rounded"
                                                >
                                                  {link.name}
                                                </a>
                                              ))}
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })()}
                                  </div>
                                </div>
                              ) : (
                                <div className="py-1 min-w-[240px]">
                                  {item.items?.map((sub) => (
                                    <a
                                      key={sub.name}
                                      href={sub.href || '#'}
                                      className="flex items-center justify-between px-4 py-2 text-sm border-b text-[#3b4047] hover:bg-[#20598d] hover:text-white"
                                    >
                                      <span>{sub.name}</span>
                                      {sub.items && <ChevronRight className="w-4 h-4 text-gray-400" />}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-[#3b4047] font-bold sm:px-2 lg:px-0 xl:px-2  py-1 hover:border-b border-gray-500"
                      >
                        {item.name}
                      </a>
                    )
                  )}
                </div>

                {/* Mobile Hamburger */}
                <div className="flex items-center md:hidden">
                  <button onClick={() => setMobileMenuOpen((p) => !p)} className="text-gray-800">
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  key="mobile-nav"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                  className="md:hidden bg-white px-4 pb-4 shadow-md overflow-hidden"
                >
                  {navItems.map((item) =>
                    item.isDropdown ? (
                      <div key={item.name} className="mb-2">
                        <button
                          onClick={() =>
                            setOpenDropdown((p) => (p === item.name ? null : item.name))
                          }
                          className="w-full text-left font-medium flex justify-between items-center py-2 text-black border-b"
                        >
                          {item.name}
                          <ChevronDown
                            className={`transition-transform ${
                              openDropdown === item.name ? 'rotate-180' : ''
                            }`}
                            size={18}
                          />
                        </button>

                        <AnimatePresence>
                          {openDropdown === item.name && (
                            <motion.div
                              key={item.name}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: 'easeInOut' }}
                              className="ml-4 overflow-hidden"
                            >
                              {item.items?.map((sub) => (
                                <div key={sub.name} className="mb-1">
                                  {sub.items ? (
                                    <>
                                      <button
                                        onClick={() =>
                                          setOpenSubDropdown((p) => (p === sub.name ? null : sub.name))
                                        }
                                        className="w-full flex justify-between items-center py-1 text-sm text-gray-700 border-b"
                                      >
                                        {sub.name}
                                        <ChevronDown
                                          className={`transition-transform ${
                                            openSubDropdown === sub.name ? 'rotate-180' : ''
                                          }`}
                                          size={14}
                                        />
                                      </button>

                                      <AnimatePresence>
                                        {openSubDropdown === sub.name && (
                                          <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.18 }}
                                            className="ml-4 overflow-hidden"
                                          >
                                            {sub.items.map((subsub) => (
                                              <a
                                                key={subsub.name}
                                                href={subsub.href}
                                                className="block py-1 text-sm text-gray-600 hover:text-blue-700"
                                              >
                                                {subsub.name}
                                              </a>
                                            ))}
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </>
                                  ) : (
                                    <a
                                      href={sub.href}
                                      className="flex items-center justify-between py-1 pr-2 text-sm text-gray-700 hover:text-blue-700 border-b"
                                    >
                                      <span>{sub.name}</span>
                                      <ChevronRight className="w-4 h-4 text-gray-400" />
                                    </a>
                                  )}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a key={item.name} href={item.href} className="block py-2 text-black font-medium border-b">
                        {item.name}
                      </a>
                    )
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </div>
      </div>
    </>
  );
}
