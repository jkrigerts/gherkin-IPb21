function GherkinTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Angļu v.</th>
          <th>Latviešu v.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>feature</td>
          <td>Funkcionālā iezīme</td>
        </tr>
        <tr>
          <td>background</td>
          <td>Konteksts</td>
        </tr>
        <tr>
          <td>scenario</td>
          <td>Scenārijs</td>
        </tr>
        <tr>
          <td>scenarioOutline</td>
          <td>Scenārijs pēc parauga</td>
        </tr>
        <tr>
          <td>example</td>
          <td>Piemērs</td>
        </tr>
        <tr>
          <td>given</td>
          <td>Kad</td>
        </tr>
        <tr>
          <td>when</td>
          <td>Ja</td>
        </tr>
        <tr>
          <td>then</td>
          <td>Tad</td>
        </tr>
        <tr>
          <td>and</td>
          <td>Un</td>
        </tr>
        <tr>
          <td>but</td>
          <td>Bet</td>
        </tr>
        <tr>
          <td>or</td>
          <td>Vai</td>
        </tr>
      </tbody>
    </table>
  );
}

export default GherkinTable;
