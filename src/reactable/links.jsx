import React from 'react';

function pageHref(name) {
    return `#page-${name}`
}

export class Links extends React.Component {
    handlePageButton(page, e) {
        e.preventDefault();
        this.props.onPageChange(page);
    }

    renderPageButton(className, link) {

        return <a className={className}
                  key={link.rel}
                  href={pageHref(link.rel)}
                  onClick={this.handlePageButton.bind(this, link)}>
                  {link.rel}
              </a>
    }

    render() {
        if (typeof this.props.colSpan === 'undefined') {
            throw new TypeError('Must pass a colSpan argument to Links');
        }

        if (typeof this.props.paginationLinks === 'undefined') {
            throw new TypeError('Must pass an object paginationLinks argument to Links');
        }

        var pageButtons = [];

        for (var i = 0; i < this.props.paginationLinks.length; i++) {
            var className = "reactable-page-button";
            pageButtons.push(this.renderPageButton(className, this.props.paginationLinks[i]));
        }

        return (
            <tbody className="reactable-pagination-links">
                <tr>
                    <td colSpan={this.props.colSpan}>
                        {pageButtons}
                    </td>
                </tr>
            </tbody>
        );
    }
};
