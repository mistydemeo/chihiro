import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  // Language/region pair, e.g. ja-jp or en-us
  const [language, setLanguage] = useState("en");
  const [region, setRegion] = useState("ca");
  // The PSN ID for the game you want to look up
  const [id, setId] = useState("UP4501-PCSE00540_00-00001AQUAKITTYDX");

  const idInputChanged = (event) => {
    setId(event.target.value);
  }
  const regionSelectChanged = (event) => {
    setRegion(event.target.value);
  }
  const languageSelectChanged = (event) => {
    setLanguage(event.target.value);
  }

  const getdata = async (region, language, id) => {
    let url = `https://store.playstation.com/store/api/chihiro/00_09_000/container/${region}/${language}/999/${id}`
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    getdata(region, language, id);
  }, [region, language, id]);
  if (data && data.codeName == null) {
    return <div className="App">
      <select name="region" id="region" onChange={ regionSelectChanged }>
        <option value="ca" selected="selected">Canada (ca)</option>
        <option value="hk">Hong Kong (hk)</option>
        <option value="jp">Japan (jp)</option>
        <option value="us">United States (us)</option>
        <option value="gb">United Kingdom (gb)</option>
      </select>
      <select name="language" id="language" onChange={ languageSelectChanged }>
        <option value="en" selected="selected">English</option>
        <option value="ja">Japanese</option>
        <option value="zh">Chinese</option>
      </select>
      <input type="text" value={ id } onChange={ idInputChanged }/>

      <h3>{ data.title_name } ({ data.id })</h3>

      <center><img border="1" width="33%" src={ data.images[0]["url"] } alt="Cover art"/></center>

      <table border="1">
        <tbody>
        <tr>
          <th>Platform</th>
          <th>Price</th>
          <th>Release Date</th>
          <th>Description</th>
        </tr>
        <tr>
          <td valign="top">{ (data.playable_platform || []).join(", ") }</td>
          <td valign="top">{ data.default_sku.display_price }</td>
          <td valign="top">{ new Date(data.release_date).toDateString() }</td>
          <td><div dangerouslySetInnerHTML={ {__html: data.long_desc} } /></td>
        </tr>
        </tbody>
      </table>
    </div>;
  } else if (data && data.codeName) {
    return <div>
      <select name="region" id="region" onChange={ regionSelectChanged }>
        <option value="ca" selected="selected">Canada (ca)</option>
        <option value="hk">Hong Kong (hk)</option>
        <option value="jp">Japan (jp)</option>
        <option value="us">United States (us)</option>
        <option value="gb">United Kingdom (gb)</option>
      </select>
      <select name="language" id="language" onChange={ languageSelectChanged }>
        <option value="en" selected="selected">English (en)</option>
        <option value="ja">Japanese (jp)</option>
        <option value="zh">Chinese (zh)</option>
      </select>
      <input type="text" value={ id } onChange={ idInputChanged }/>
    </div>;
  } else {
    return <div className="App">Now loading...</div>
  }
}

export default App;
