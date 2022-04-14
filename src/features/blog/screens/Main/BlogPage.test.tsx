import {render} from '@testing-library/react'
import type {BlogPageProps} from './BlogPage'
import { DEFAULT_BlogPage_TESTING_PROPS } from './BlogPage.fixture'
import {BlogPage} from './BlogPage'

const setup = (props: BlogPageProps = DEFAULT_BlogPage_TESTING_PROPS) => {

const result = render(<BlogPage {...props}/>)

return result

};


describe('BlogPage component', () => {

     it('should render', () => {
        const {baseElement} = setup();
        expect(baseElement).toBeInTheDocument();
})
});