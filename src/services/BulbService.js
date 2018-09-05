const getBulbsUrl = 'http://localhost:3500/api/v1/device';
const staticBulbs = {
  data: [
    {
      id: 1,
      name: 'Balcony',
      active: true,
      brightness: 15,
    },
    {
      id: 2,
      name: 'Bedroom 01',
      active: true,
      brightness: 68,
    },
    {
      id: 3,
      name: 'Bedroom 02',
      active: true,
      brightness: 18,
    },
    {
      id: 4,
      name: 'Entrya',
      active: true,
      brightness: 30,
    },
    {
      id: 5,
      name: 'Smart kitchen 2',
      active: true,
      brightness: 31,
    },
    {
      id: 6,
      name: 'Living Room',
      active: true,
      brightness: 40,
    },
    {
      id: 7,
      name: 'Master Bedroom',
      active: false,
      brightness: 60,
    },
    {
      id: 8,
      name: 'Storage',
      active: false,
      brightness: 100,
    },
  ],
};

function getBulbs() {
  return new Promise((resolve) => {
    resolve(staticBulbs);
  });
}

function updateBulb(bulb) {
  const setBulbUrl = `${getBulbsUrl}/${bulb.id}`;
  return new Promise((resolve, reject) => {
    fetch(setBulbUrl, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        data: bulb,
      }),
    })
      .then(resp => resp.json()) // Transform the data into json
      .catch((error) => {
        reject(error);
      })
      .then((response) => {
        resolve(response);
      });
  });
}

module.exports = {
  getBulbs,
  updateBulb,
};
