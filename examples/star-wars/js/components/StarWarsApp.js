/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React from 'react';
import Relay from 'react-relay';
import StarWarsRegion from './StarWarsRegion';

class StarWarsApp extends React.Component {
  render() {
    var {brainStructures} = this.props;
    return (
      <ol>
        {brainStructures.map(brainStructure => (
          <li>
            <h1>{brainStructure.name}</h1>
            <ol>
              {brainStructure.edges.map(edge => (
                <li><StarWarsRegion brainStructure={edge.node} /></li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    );
  }
}

export default Relay.createContainer(StarWarsApp, {
  fragments: {
    brainStructures: () => Relay.QL`
      fragment on BrainStructure @relay(plural: true) {
        name,
        regions {

              ${StarWarsRegion.getFragment('region')}
        }
      }
    `,
  },
});
