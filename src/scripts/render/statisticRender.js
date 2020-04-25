import { clickOnPopupStatistic } from '../actions/statistic';
import { createDivElement } from '../helpers/domHelpers';

export const statisticRender = () => {
	const statistic = JSON.parse(localStorage.getItem('statistics'));

	Object.entries(statistic).forEach(([key, value]) => {
		const row = value
			.map((value) => {
				return `
          <tr>
            <td>${value.word}</td>
            <td>${value.translation}</td>
            <td>${value.clicksTrain}</td>
            <td>${value.successGame}</td>
            <td>${value.errorGame}</td>
            <td>${value.percent}</td>
          </tr>
        `;
			})
			.join('');

		const table = createDivElement('table');
		table.innerHTML = `
      <table>
        <caption>${key}</caption>
        <thead>
          <tr>
            <th>Word</th>
            <th>Translate</th>
            <th>Clicks of Train</th>
            <th>Success per Game</th>
            <th>Error per Game</th>
            <th>Error (percent)</th>
          </tr>
        </thead>
        <tbody>
          ${row}
        </tbody>
        </table>
      `;
		document.querySelector('.table-wrapper').append(table);
	});

	clickOnPopupStatistic();
};
