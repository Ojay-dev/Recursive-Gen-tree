import './App.scss';
import { useGesture } from '@use-gesture/react';
import { useRef, useState, useEffect } from 'react';
import Xarrow from 'react-xarrows';
import Draggable from 'react-draggable';

// function App() {
//   let [crop, setCrop] = useState({ x: 0, y: 0, scale: 0.5 });
//   let editorRef = useRef();
//   const { height, width } = useWindowDimensions();

//   useGesture(
//     {
//       // onDrag: ({ offset: [dx, dy] }) => {
//       //   setCrop((crop) => ({ ...crop, x: dx, y: dy }));
//       // },
//       onPinch: ({ offset: [d] }) => {
//         console.log('pinch value', d);
//         setCrop((crop) => ({ ...crop, scale: 0.5 + d / 50 }));
//       }
//     },
//     {
//       target: editorRef,
//       eventOptions: { passive: false }
//     }
//   );

//   return (
//     <>
//       <div style={{ position: 'fixed', top: 0, zIndex: 10 }}>
//         <button onClick={() => {}}>Zoom</button>
//       </div>
//       <div style={{ width: '100vw', height: '100vh', overflow: 'scroll' }}>
//         <div
//           ref={editorRef}
//           style={{ position: 'relative', transform: `scale(${crop.scale})` }}
//         >
//           {/* Genesis Block */}
//           <div
//             style={{
//               position: 'relative',
//               left: width / 2 - 250,
//               width: 500
//             }}
//             className="child"
//           />

//           {/* 1st Generation Block */}
//           <div className="container">
//             <Draggable>
//               <div className="child" />
//             </Draggable>
//             <Draggable>
//               <div className="child" />
//             </Draggable>
//             <Draggable>
//               <div className="child" />
//             </Draggable>
//             <Draggable>
//               <div className="child" />
//             </Draggable>
//             <Draggable>
//               <div className="child" />
//             </Draggable>
//             <Draggable>
//               <div className="child" />
//             </Draggable>
//             <Draggable>
//               <div className="child" />
//             </Draggable>
//             <Draggable>
//               <div className="child" />
//             </Draggable>
//             <Draggable>
//               <div className="child" />
//             </Draggable>
//           </div>

//           {/* 2nd Generation Block */}
//           <div className="container">
//             <Draggable>
//               <div className="child" />
//             </Draggable>
//             <Draggable>
//               <div className="child" />
//             </Draggable>
//             <Draggable>
//               <div className="child" />
//             </Draggable>
//             <Draggable>
//               <div className="child" />
//             </Draggable>
//             <Draggable>
//               <div className="child" />
//             </Draggable>
//           </div>
//         </div>
//       </div>
//     </>
//   );

//   // return (
//   //   <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
//   //     <div
//   //       className="App"
//   //       ref={editorRef}
//   //       style={{
//   //         left: crop.x,
//   //         top: crop.y,
//   //         transform: `scale(${crop.scale})`,
//   //         touchAction: 'none'
//   //       }}
//   //     >
//   //       {/* <div className="App__top-action">
//   //         <a href="#">Back to Detail</a>

//   //         <div>
//   //           <button>Zoom Out</button>
//   //           <button>Publish</button>
//   //         </div>
//   //       </div> */}
//   //       <Draggable>
//   //         <textarea
//   //           style={{
//   //             width: 551,
//   //             height: 195,
//   //             background: '#FFFFFF',
//   //             boxShadow: '0px 4px 17px rgba(0, 0, 0, 0.05)',
//   //             border: 'none',
//   //           }}
//   //           id="genblock"
//   //         />
//   //       </Draggable>

//   //       <Draggable>
//   //         <textarea
//   //           style={{
//   //             width: 551,
//   //             height: 195,
//   //             background: '#FFFFFF',
//   //             boxShadow: '0px 4px 17px rgba(0, 0, 0, 0.05)',
//   //             border: 'none',
//   //           }}
//   //           id="childblock"
//   //         />
//   //       </Draggable>

//   //       <Xarrow
//   //         start="genblock" //can be react ref
//   //         end="childblock" //or an id
//   //       />
//   //     </div>
//   //   </div>
//   // );
// }
const arrowProperties = {
  curveness: 0.2,
  // showHead: false,
  headSize: 4,
  color: '#030654',
  strokeWidth: 2,
  zIndex: -10
};

function App({ blocks }) {
  let [crop, setCrop] = useState({ x: 0, y: 0, scale: 0.5 });
  let editorRef = useRef();

  if (!blocks.length) {
    return null;
  }

  const children = blocks.reduce((acc, cur) => {
    if (!cur.children) {
      return acc;
    }
    return [...acc, ...cur.children.map((child) => ({ ...child }))];
  }, []);

  return (
    <>
      {/** First Gen (Genesis level) */}
      <div className="container">
        {blocks.map((block) => {
          // block
          // console.log(`Start: ${block.parent} - End: ${block._id}`);
          return (
            // <Draggable key={block._id}>
            <div className="child" id={block._id} key={block._id}>
              {block.text}
              {block.parent && (
                <Xarrow
                  start={block.parent} //can be react ref
                  end={block._id} //or an id
                  {...arrowProperties}
                />
              )}
            </div>
          );
        })}
      </div>
      <App blocks={children} />
    </>
  );
}

export default App;
