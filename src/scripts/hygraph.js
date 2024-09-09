const ENDPOINT = import.meta.env.HYGRAPH_ENDPOINT;

async function getSections() {
  const query = `
            { 
                sections {
                    title
                    subtitle
                    description {
                      raw
                      html
                      markdown
                      text
                    }
                    subsections {
                      title
                      subtitle
                      description
                      order
                      subsectionId
                    }
                    order
                    sectionId
                    }
                }`;
  return await get(query);
}

async function getMembers() {
  const query = `
  { 
    members {
      name
      role
      image {
        id
        url
        fileName
        mimeType
        width
        height
        size
      }
    }
  }`;
  return get(query);
}

async function getReviews() {
  const query = `
    { 
        reviews {
            name
            location
            text
            date
            image
            stars
            }
        }`;
  return get(query);
}

async function getSoMeLinks() {
  const query = `
            { 
                socialmedias {
                    title
                    link
                    someId
                    icon
                }
            }`;
  return await get(query);
}

async function get(q) {
  const query = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: q,
    }),
  };

  return (await fetch(ENDPOINT, query)).json();
}

export { getSections, getReviews, getSoMeLinks, getMembers };
