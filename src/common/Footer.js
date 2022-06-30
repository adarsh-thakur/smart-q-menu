import '../styles/Footer.css'
export const FOOTER_OPERATIONS = Object.freeze({
    'ALL_UNAVAILABLE': 'ALL UNAVAILABLE',
    'ALL_AVAILABLE': 'ALL AVAILABLE',
    'APPLY': 'APPLY'
});
export function Footer(props) {
    return (
        <footer className="app-footer full-width">
            <div
                className="display-flex full-height flex-row justify-content-space-between align-items-center">
                {Object.keys(FOOTER_OPERATIONS).map(opr => <button
                    type='button'
                    onClick={() => props.onBulkOperation(FOOTER_OPERATIONS[opr])}
                    className='footer-button'>
                    {FOOTER_OPERATIONS[opr]}
                </button>)}
            </div>
        </footer>
    )
}