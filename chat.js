const openChatGPT = () => {
  const url = "https://api.openai.com/v1/engines/chatGPT";

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.onload = () => {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const plugin = document.createElement("iframe");
      plugin.src = response.url;
      document.body.appendChild(plugin);
    } else {
      console.error("Error loading ChatGPT plugin: " + xhr.statusText);
    }
  };
};

openChatGPT();