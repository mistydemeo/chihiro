import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  // Language/region pair, e.g. ja-jp or en-us
  const [language, setLanguage] = useState("ja");
  const [region, setRegion] = useState("jp");
  // The PSN ID for the game you want to look up
  const [id, setId] = useState("");

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
        <option value="ca">Canada (ca)</option>
        <option value="jp" selected="selected">Japan (jp)</option>
        <option value="us">United States (us)</option>
      </select>
      <select name="language" id="language" onChange={ languageSelectChanged }>
        <option value="en">English</option>
        <option value="ja" selected="selected">Japanese</option>
        <option value="zh">Chinese</option>
      </select>
      <input type="text" value={ id } onChange={ idInputChanged }/>

      <h3>{ data.title_name } ({ data.id })</h3>
      <table border="1">
        <tbody>
        <tr>
          <th>Platform</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
        <tr>
          <td valign="top">{ (data.playable_platform || []).join(", ") }</td>
          <td valign="top">{ data.default_sku.display_price }</td>
          <td><div dangerouslySetInnerHTML={ {__html: data.long_desc} } /></td>
        </tr>
        </tbody>
      </table>
    </div>;
  } else if (data && data.codeName) {
    return <div>
      <select name="region" id="region" onChange={ regionSelectChanged }>
        <option value="ca">Canada (ca)</option>
        <option value="hk">Hong Kong (hk)</option>
        <option value="jp" selected="selected">Japan (jp)</option>
        <option value="us">United States (us)</option>
      </select>
      <select name="language" id="language" onChange={ languageSelectChanged }>
        <option value="en">English (en)</option>
        <option value="ja" selected="selected">Japanese (jp)</option>
        <option value="zh">Chinese (zh)</option>
      </select>
      <input type="text" value={ id } onChange={ idInputChanged }/>
    </div>;
  } else {
    return <div className="App">Now loading...</div>
  }
}

export default App;
