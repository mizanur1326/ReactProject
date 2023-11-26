import React from "react";

export default function Home() {
  return (
    <div>
      <h1>This is Home Component</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error vitae
        cum eum quibusdam voluptas voluptates illum, similique veritatis,
        obcaecati perspiciatis sit et modi corrupti odit, maiores ducimus.
        Sapiente quasi, ut molestias ex inventore voluptate voluptates sed,
        itaque deleniti soluta perferendis saepe assumenda repudiandae
        distinctio? Illo quisquam reprehenderit aspernatur sed blanditiis!
      </p>

      <div class="jumbotron">
        <h1 class="display-4">Hello, world! This is Jumbortron</h1>
        <p class="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>

        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger
        </p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div>

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
