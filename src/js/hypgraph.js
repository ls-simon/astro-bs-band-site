const ENDPOINT = import.meta.env.HYGRAPH_ENDPOINT;

async function getSections() {
  const query = `
            { 
                sections {
                    title
                    description
                    order
                    sectionId
                    }
                }`;
  return await get(query);
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

async function getBandMembers() {
  const query = `
    { 
        members {
            name
            role
            }
        }`;
    return get(query);
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

export { getSections, getReviews, getBandMembers };
