import { useState, useEffect } from "react";
export default function News() 
{
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [search, setSearch] = useState()
    const [currentPage, setcurrentpage] = useState(1);
    const pagesize = 5;

    function fetchdata() {
        fetch('https://newsdata.io/api/1/latest?Api_Key=pub_03462f2b565c4d08a6aff9385dd0b7a8&q=Oscars')
        .then(res => res.json())
        .then(data => { 
            setNews(data.articles);
            setLoading(false);}
        )

        .catch(error => {
            setError("Data Not Found");
            setLoading(false);
        })
    }

    useEffect(()=>{
        fetchdata();
    },[])

    const lastindex = currentPage * pagesize;
    const firstindex = lastindex - pagesize;
    const currentnews = news.slice(firstindex, lastindex);
    const totalpages = Math.ceil(news.length / pagesize);

    if(!loading) return <h1>Loading...</h1>
    if(error) return <h1> {error} </h1>

    return (
    <div>
      <h3>Latest News</h3>

      <input
        type="text"
        placeholder="Search news..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={fetchdata}>Search</button>

      {currentNews.map((item, index) => (
        <NewsCard key={index} news={item} />
      ))}

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
           Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: "5px",
              fontWeight: currentPage === i + 1 ? "bold" : "normal",
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next 
        </button>
      </div>
    </div>
  );
}