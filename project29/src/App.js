import logo from "./logo.svg";
import "./App.css";

function App() {
  
  let topTollywoodActors = [
    "Chiranjeevi",
    "Pawan Kalyan",
    "Mahesh Babu",
    "Prabhas",
    "Jr. NTR",
    "Allu Arjun",
    "Ram Charan",
    "Vijay Deverakonda",
    "Nani",
    "Nagarjuna Akkineni",
    "BalaKrishna",
    "RaviTeja",
    "Venkatesh",
  ];
  let numbers = [
    35, 37, 42, 44, 48, 46, 78, 69, 88, 12, 17, 32, 28, 27, 21, 97, 71, 83, 121,
    111, 105, 108, 286, 278,
  ];
  let tenthMarks = [96, 34, 80, 78, 86, 89];

  let topBollywoodActors = [
    "ShahRukh Khan","Salman Khan","Aamir Khan","Akshay Kumar","Ranbir Kapoor","Hrithik Roshan",
    "Ajay Devgn","Ranveer Singh","Shahid Kapoor","Amitabh Bachchan",
  ];
  let topKollywoodActors = [
    "Rajinikanth","Kamal Haasan","Vijay","Vijay Sethupati","Ajith Kumar","Suriya","Vijay Sethupati",
    "Dhanush","Vikram","Vijay Sethupati","Karthi","Vijay Sethupati","Sivakarthikeyan","Jayam Ravi",
  ];
  let topSandalwoodActors = [
    "Yash","Puneeth Rajkumar","Sudeep","Darshan","Rishab Shetty","Rakshit Shetty",
    "Shiva Rajkumar","Upendra","Ganesh","Dhananjay",
  ];
  let topMollywoodActors = [
    "Mohanlal","Mammootty","Dulquer Salmaan","Prithviraj Sukumaran","Fahadh Faasil","Nivin Pauly",
    "Tovino Thomas","Jayasurya","Asif Ali","Gopi Suresh",
  ];

  return (
    <div className="App">
      <div>
        
        <h2>Class-3 : Array Iteration Methods</h2>
        <button
          onClick={() => {
            let result = tenthMarks.every((ele, i) => {
              return ele >= 35;
            });
            if (result == true) {
              console.log("Student Passed in Tenth");
            } else {
              console.log("Student Failed in Tehth");
            }
          }}
        >
          Every
        </button>
        <button
          onClick={() => {
            let result = tenthMarks.some((ele, i) => {
              return ele < 35;
            });
            if (result == true) {
              console.log("Student Failed in Tenth");
            } else {
              console.log("Student passed in Tehth");
            }
          }}
        >
          Some
        </button>
        <button
          onClick={() => {
            let title = ["T", "e", "n", "t", "h", "M", "a", "r", "k", "s"];
            let totalMarks = tenthMarks.reduce((tot, ele) => {
              return (tot += ele);
            });
            let titleName = title.reduce((tot, ele) => {
              return (tot += ele);
            });
            console.log(titleName);
            console.log(totalMarks);
          }}
        >
          Reduce
        </button>
        <button
          onClick={() => {
            let title = ["T", "e", "n", "t", "h", "M", "a", "r", "k", "s"];
            let titleName = title.reduceRight((tot, ele) => {
              return (tot += ele);
            });
            console.log(titleName);
          }}
        >
          Reduce right
        </button>
        <button
          onClick={() => {
            let filterdArray1 = numbers.filter((ele, i) => {
              return ele % 2 == 0;
            });
            let filterdArray2 = numbers.filter((ele, i) => {
              return ele % 2 != 0;
            });
            let passMarks = numbers.filter((ele, i) => {
              return ele > 35;
            });
            console.log(numbers);
            console.log(filterdArray1);
            console.log(filterdArray2);
            console.log(passMarks);
          }}
        >
          Filter
        </button>
        <button
          onClick={() => {
            let returnMarks = numbers.map((ele, i) => {
              return (ele += 25);
            });
            let actorsMap = topTollywoodActors.map((ele, i) => {
              return `Actor ${ele}`;
            });
            console.log(numbers);
            console.log(returnMarks);
            console.log(actorsMap);
          }}
        >
          Map
        </button>
        <h2>Array Sort Methods</h2>
        <button
          onClick={() => {
            console.log(numbers.sort());
            console.log(
              numbers.sort((a, b) => {
                return a - b;
              })
            );
            console.log(numbers.reverse());
            console.log(topTollywoodActors.sort());
          }}
        >
          Sort
        </button>
        <button
          onClick={() => {
            let numbers = [
              35, 37, 42, 44, 48, 46, 78, 69, 88, 12, 17, 32, 28, 27, 21, 97, 71, 83, 121,
              111, 105, 108, 286, 278,
            ];
            let findNumber = numbers.find((ele, i) => {
              return ele > 50;
            });
            let findNumberIndex = numbers.findIndex((ele, i) => {
              return ele > 50;
            });
            console.log(findNumber);
            console.log(findNumberIndex);
          }}
        >
          Find/Index
        </button>

        <button
          onClick={() => {
            let numbers = [
              35, 37, 42, 44, 48, 46, 78, 69, 88, 12, 17, 32, 28, 27, 21, 97, 71, 83, 121,
              111, 105, 108, 286, 278,
            ];
            let findLastNumber = numbers.findLast((ele, i) => {
              return ele > 50;
            });
            let findLastIndexNumber = numbers.findLastIndex((ele, i) => {
              return ele > 50;
            });
            console.log(findLastNumber);
            console.log(findLastIndexNumber);
          }}
        >
          FindLast/Index
        </button>
      </div>
      <div>
        <h2> Class-1 : Basic Array Methods</h2>

        <button onClick={()=>{ console.log(topTollywoodActors.length);
         console.log(topTollywoodActors[0])
         console.log(topTollywoodActors[1])
         console.log(topTollywoodActors[2])
         for(let a=3;a<8;a++ ){
          console.log(topTollywoodActors[a])
         }
         for(let a=9;a<topTollywoodActors.length;a++ ){
          console.log(topTollywoodActors.at(a))
         }
          }}>Lenght</button>
        <button onClick={()=>{ 
         console.log(topBollywoodActors)
         console.log(topBollywoodActors.toString())
         console.log(topBollywoodActors.join(" & "))   

        }}>To string</button>
         <button onClick={()=>{
          topTollywoodActors.push("Viswaksen","sharwanand")
          console.log(topTollywoodActors)
            }}>Push</button>
         <button onClick={()=>{ 
           topTollywoodActors.pop()
           console.log(topTollywoodActors)
            }}>Pop</button>
         <button onClick={()=>{
           topTollywoodActors.unshift("NTR","ANR","Krishna")
           console.log(topTollywoodActors)
            }}>Unshift</button>
         <button onClick={()=>{ 
           topTollywoodActors.shift();
           console.log(topTollywoodActors)
           }}>Shift</button>
         <button onClick={()=>{
          console.log(topTollywoodActors)
          topTollywoodActors.splice(7,0,"VarunTej","SaiDharamTej","VishnavTej")
          console.log(topTollywoodActors)
            }}>Splice</button>

          <button onClick={()=>{ 
            let indianActors = topTollywoodActors.concat(topBollywoodActors,topKollywoodActors,
              topSandalwoodActors,topMollywoodActors
            )
            console.log(indianActors)

            
            let topIndianActors = [...topTollywoodActors,...topBollywoodActors,...topKollywoodActors,
              ...topSandalwoodActors,
              ...topMollywoodActors
            ]
            console.log(topIndianActors)
             }}>Concat</button>
          <button onClick={()=>{ 
            console.log(topKollywoodActors)
           let kollywoodActors = topKollywoodActors.slice(7,10)
            console.log(kollywoodActors)
              }}>Slice</button>
          <button onClick={()=>{ 
            let actors = [[topTollywoodActors,topBollywoodActors,topKollywoodActors],topSandalwoodActors,
              topMollywoodActors]
            let actorsArray = actors.flat()
            let actorsArray1 = actors.flat(3)
            console.log(actors)
            console.log(actorsArray)
            console.log(actorsArray1)
             }}>Flat</button>
      </div>
      <div>
        <h2> Class-2 : Search & Iteration Methods</h2>
        <button onClick = {()=>{ 
           console.log(topBollywoodActors.at(7))
           console.log(topBollywoodActors.indexOf("Shahid Kapoor"))
          console.log(topBollywoodActors.indexOf("Ranbir Kapoor"))
          console.log(topBollywoodActors.indexOf("Sushanth singh Rajput"))
          console.log(topBollywoodActors.indexOf("ayushmann khurrana"))
           }}>IndexOf</button>
           <button onClick={()=>{
           console.log(topKollywoodActors.lastIndexOf("Vijay Sethupati"))
           }}>LastIndexOf</button>
           <button onClick={()=>{
           console.log(topSandalwoodActors.includes("Puneeth Rajkumar"))
           console.log(topSandalwoodActors.includes("RajKumar"))
           console.log(topSandalwoodActors.includes("Vishnuvardhan"))
           }}>Includes</button>
           <button onClick={()=>{ 
            console.log(topMollywoodActors)
            topMollywoodActors.fill("Actor",4,8)
            console.log(topMollywoodActors)
               }}>Fill</button>
           <button onClick={()=>{ 
            let actors = "Indian Top Actors"
            console.log(Array.from(actors))
               }}>From</button>
           <button onClick={()=>{  
            console.log(Array.isArray(["TollywoodActors"]))
            console.log(Array.isArray("BollywoodActors"))

              }}>IsArray</button>
           <button onClick={()=>{  
            console.log(topSandalwoodActors)
            topSandalwoodActors.reverse();
            console.log(topSandalwoodActors)
              }}>Reverse</button>
           <button onClick={()=>{ 
            topTollywoodActors.forEach((ele,i)=>{
              console.log(`${i}=> ${ele}`)
            })
               }}>ForEach</button>
      </div>


    </div>
  );
}

export default App;
