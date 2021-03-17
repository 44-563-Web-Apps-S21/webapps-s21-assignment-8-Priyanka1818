const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table>')
      res.write('<tr> <th>Location</th> <th>Number of hours</th> <th>Money</th> </tr>')
      res.write('<tr> <td>Kanaka Durga Temple</td> <td>3hrs </td> <td>30$ </td> </tr>')   
      res.write(' <tr> <td>Undavalli Caves </td> <td>2hrs </td> <td>20$ </td> </tr>') 
      res.write(' <tr> <td>Prakasam Barrage </td> <td>2hrs </td> <td>15$</td> </tr>')
      res.write(' <tr> <td>Bhavani Island </td> <td>4hrs </td> <td>50$</td> </tr>')
      res.write('</table>')
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})