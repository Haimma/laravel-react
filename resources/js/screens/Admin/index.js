import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';

import { webFetch } from '../../actions';

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
      let direction = 'ascending';
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
  };

  const ProductTable = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.products);
    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
      <table>
        <thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => requestSort('web')}
                className={getClassNamesFor('web')}
              >
                Web
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('clicked')}
                className={getClassNamesFor('clicked')}
              >
                Clicked
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => requestSort('lastClicked')}
                className={getClassNamesFor('lastClicked')}
              >
                Last Clicked
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.web}>
              <td>{item.web}</td>
              <td>{item.clicked}</td>
              <td>{item.lastClicked}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  class Admin extends Component {

    componentDidMount() {
        this.props.webFetch();
    }

    render() {
        return (
            <div className="App">
                {!this.props.webHistory.length  ?  <div>No Data </div> : <ProductTable products={this.props.webHistory}/>}
            </div>
            );
    }
  }

const mapStateToProps = (state) => {
    const {  webHistory } = state.website
    return { webHistory }
};

export default connect(mapStateToProps, { webFetch })(Admin);
