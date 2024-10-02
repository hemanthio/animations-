// 'use client';

// import { useState, useRef, useEffect } from 'react';
// import { useRouter } from 'next/navigation';  // Change to 'next/navigation' for client-side routing
// import { X } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function Component() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const menuRef = useRef(null);
//   const router = useRouter();  // Use the new router from 'next/navigation'

//   const toggleMenu = () => {
//     setIsOpen((prev) => !prev);
//     setIsHovered(false);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//     setIsHovered(false);
//   };

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         closeMenu();
//       }
//     }

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Define the menu items and their corresponding routes
//   const menuItems = [
//     { name: 'Home', path: '/' },
//     { name: 'Our Work', path: '/works' },
//     { name: 'Expertise', path: '/expertise' },
//     { name: 'About', path: '/about' },
//     { name: 'Blog', path: '/blog' },
//     { name: 'Contact', path: '/contact' }
//   ];

//   const menuVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         when: "beforeChildren",
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 0, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//     },
//   };

//   const handleNavigation = (path) => {
//     router.push(path);  // Push the path using client-side router
//   };

//   return (
//     <div className="fixed bottom-4 z-50 left-1/2 transform -translate-x-1/2" ref={menuRef}>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             exit="hidden"
//             variants={menuVariants}
//             className="absolute bottom-full mb-2 w-[226px] bg-[#DE0015] rounded-3xl overflow-hidden py-4 px-4"
//           >
//             {menuItems.map((item, index) => (
//               <motion.button
//                 key={index}
//                 variants={itemVariants}
//                 className="w-full text-white text-left px-4 py-3 mb-1 last:mb-0 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 ease-in-out"
//                 whileHover={{ scale: 1.0 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => handleNavigation(item.path)}  // Use the handler to navigate
//               >
//                 {item.name}
//               </motion.button>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <div
//         className={`relative bg-[#DE0015] text-white rounded-full w-[226px] h-[83px] transition-all duration-300 ease-in-out ${isOpen ? 'rounded-full' : ''}`}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => !isOpen && setIsHovered(false)}
//         style={{ zIndex: 2 }} // Add a higher z-index to ensure it's clickable
//       >
//         <button
//           className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-16 h-16 bg-white rounded-full transition-all duration-300 ease-in-out z-10 ${isHovered || isOpen ? 'left-1/2 -translate-x-1/2 rotate-90' : 'left-2'}`}
//           onClick={toggleMenu}
//           aria-expanded={isOpen}
//           aria-label="Toggle menu"
//         >
//           {!isOpen ? (
//             <div className="flex flex-col justify-center items-center w-6 h-6 space-y-2 transition-transform duration-300">
//               <div className="w-6 h-0.5 bg-[#DE0015] rounded-full transform transition-transform duration-300 ease-in-out"></div>
//               <div className="w-6 h-0.5 bg-[#DE0015] rounded-full transform transition-transform duration-300 ease-in-out"></div>
//             </div>
//           ) : (
//             <X className="w-8 h-8 text-[#DE0015] transition-transform duration-300 ease-in-out" />
//           )}
//         </button>
//         <span
//           className={`absolute right-7 top-1/2 -translate-y-1/2 font-bold text-[35px] transition-opacity duration-300 ease-in-out ${isHovered || isOpen ? 'opacity-0' : 'opacity-100'}`}
//         >
//           Menu
//         </span>
//       </div>
//     </div>
//   );
// }


'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Component() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setIsHovered(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsHovered(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Our Work', path: '/works' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="fixed bottom-4 z-50 left-1/2 transform -translate-x-1/2" ref={menuRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="absolute bottom-full mb-2 bg-[#DE0015] rounded-3xl overflow-hidden py-4 px-4 w-[150px] sm:w-[226px]" // Adjusted width: smaller on mobile
          >
            {menuItems.map((item, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                className="w-full text-white text-left px-4 py-3 mb-1 last:mb-0 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-red-600 transition-all duration-300 ease-in-out" // Font-size adjusted for mobile
                whileHover={{ scale: 1.0 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation(item.path)}
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`relative bg-[#DE0015] text-white rounded-full w-[150px] h-[65px] sm:w-[226px] sm:h-[83px] transition-all duration-300 ease-in-out ${isOpen ? 'rounded-full' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => !isOpen && setIsHovered(false)}
        style={{ zIndex: 2 }}
      >
        <button
          className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full transition-all duration-300 ease-in-out z-10 ${isHovered || isOpen ? 'left-1/2 -translate-x-1/2 rotate-90' : 'left-2'}`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {!isOpen ? (
            <div className="flex flex-col justify-center items-center w-4 h-4 sm:w-6 sm:h-6 space-y-2 transition-transform duration-300">
              <div className="w-4 h-0.5 sm:w-6 sm:h-0.5 bg-[#DE0015] rounded-full transform transition-transform duration-300 ease-in-out"></div>
              <div className="w-4 h-0.5 sm:w-6 sm:h-0.5 bg-[#DE0015] rounded-full transform transition-transform duration-300 ease-in-out"></div>
            </div>
          ) : (
            <X className="w-6 h-6 sm:w-8 sm:h-8 text-[#DE0015] transition-transform duration-300 ease-in-out" />
          )}
        </button>
        <span
          className={`absolute right-7 top-1/2 -translate-y-1/2 font-bold text-[20px] sm:text-[35px] transition-opacity duration-300 ease-in-out ${isHovered || isOpen ? 'opacity-0' : 'opacity-100'}`}
        >
          Menu
        </span>
      </div>
    </div>
  );
}
