export default function Tablelist({ handleOpen }) {
  const clients = [
    {
      id: "1",
      name: "Sascha Schmittinger",
      email: "ssc_consult@outlook.com",
      job: "CEO",
      rate: "100",
      isactive: true,
    },
    {
      id: "2",
      name: "Sascha Schmittinger 2",
      email: "ssc_consult2@outlook.com",
      job: "CEO",
      rate: "100",
      isactive: true,
    },
    {
      id: "3",
      name: "Sascha Schmittinger3",
      email: "ssc_consult3@outlook.com",
      job: "CEO",
      rate: "100",
      isactive: false,
    },
  ];

  return (
    <>
      <div className="overflow-x-auto mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>E-Mail</th>
              <th>Beruf</th>
              <th>Rate </th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="hover">
            {/* row 1 */}

            {clients.map((client) => (
              <tr>
                <th>{client.id} </th>
                <td>{client.name}</td>
                <td> {client.email} </td>
                <td>{client.job} </td>
                <td>{client.rate} </td>
                <td>
                  <button
                    className={`btn rounded-full w-20 ${
                      client.isactive
                        ? `btn-primary`
                        : `btn-outline btn-primary`
                    }`}
                  >
                    {client.isactive ? "Aktive" : "Inaktive"}
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleOpen("edit")}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button className="btn btn-accent">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
