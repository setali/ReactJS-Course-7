export default function ali (req, res) {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => res.status(200).json(data))
}
