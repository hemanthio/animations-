// import React from 'react'

// export default function Component() {
//   const text = "Creative Developer • Web Design • Framer Developer • "
  
//   return (
//     <div className="w-full overflow-hidden  bg-yellow-300 py-4 ">
//       <div className="animate-marquee whitespace-nowrap inline-flex">
//         {[...Array(20)].map((_, i) => (
//           <span key={i} className="mx-4 text-2xl font-regular opacity-70 text-black uppercase font-semibold inter-tight  tracking-wide">
//             {text}
//           </span>
//         ))}
//       </div>
//     </div>
//   )
// }

import React from 'react'

export default function Component() {
  const text = "Creative Developer • Web Design • Framer Developer • "

  return (
    <div className="w-full overflow-hidden bg-[#676f54] py-4">
      <div className="animate-marquee whitespace-nowrap inline-flex">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="mx-4 text-xl md:text-2xl font-regular opacity-90 text-white uppercase font-medium inter-tight tracking-wide">
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
