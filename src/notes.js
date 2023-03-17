 1) useEffect(() => {

    console.log("Call API")
  },[]); //useEffect calling it ONLY ONCE

2)   const [keyword, setKeyword] = useState("") //[value, function that modifies the value]



3)  const [keyword, setKeyword] = useState(""); //[value, function that modifies the value]  
    const onChange = (event) => setKeyword(event.target.value); //when this function runs we receive an event and take the value of input(event.target.value)
                                                                //that was created from event and put the value in state, which is "keyword" 
                                                                // then give that as a value to the input so that we can control it



 <input 
        value = {keyword} //this keyword is what the user inputs in the input
        onChange = {onChange} //event listener function (const onChange)
        type="text" 
        placeholder = "Search here..."/>

  
  4) //Goal is to search ONLY when the keyword changes NOT when the counter is increased
  useEffect(() => {
    if(keyword !== "" && keyword.length >5){
      console.log("search for",keyword)
    }
  }, [keyword]); //this code ONLY runs when [keyword] changes

  useEffect(() => {
    if(keyword !== "" && keyword.length >5){
      console.log("search for",keyword)
    }
  }, []); //if this dependency is empty it means IT will run only ONCE(at the first render)

  5) 