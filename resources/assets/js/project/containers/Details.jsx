import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setPageTitle } from '../../app/actions';
import { clearActiveProject, setProject, fetchProject, showKey } from '../actions';
import { setButtons } from '../../navigation/actions';
import * as constants from '../../navigation/constants';
import * as projects from '../constants';
import ProjectDetailsComponent from '../components/Details';

class ProjectDetails extends Component {
  constructor(props) {
    super(props);

    // FIXME: This seems wrong, and messy
    this.activeProject = props.projects.find((project) => (project.id === parseInt(props.params.id, 10)));
    this.setPageTitle = props.actions.setPageTitle;
    this.setProject = props.actions.setProject;
    this.fetchProject = props.actions.fetchProject;
    this.setButtons = props.actions.setButtons;
    this.clearActiveProject = props.actions.clearActiveProject;
    this.showKey = props.actions.showKey;
    this.fetching = props.fetching;
  }

  componentWillMount() {
    this.setupProject();
  }

  // componentDidUpdate() {
  //   this.setupProject();
  // }

  componentWillUnmount() {
    this.setButtons([]);
    this.clearActiveProject();
  }

  setupProject() {
    this.setPageTitle(this.activeProject.name);
    this.setProject(this.activeProject);
    this.fetchProject(this.activeProject);

    this.setButtons([
      {
        id: 'ssh',
        type: 'default',
        title: Lang.get('projects.view_ssh_key'),
        fa: 'key',
        text: Lang.get('projects.ssh_key'),
        action: this.showKey,
      },
      {
        id: 'deploy_project',
        type: 'danger',
        title: Lang.get('projects.deploy_project'),
        fa: 'cloud-upload',
        text: Lang.get('projects.deploy'),
      },
    ]);
  }

  render() {
    return (
      <ProjectDetailsComponent
        project={this.activeProject}
        fetching={this.props.fetching}
      >{this.props.children}</ProjectDetailsComponent>
    );
  }
}

ProjectDetails.propTypes = {
  projects: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  fetching: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const mapStateToProps = (state) => ({
  projects: state.getIn([constants.NAME, 'projects']).toJS(),
  fetching: state.getIn([projects.NAME, 'fetching']),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    setPageTitle,
    setProject,
    fetchProject,
    setButtons,
    showKey,
    clearActiveProject,
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetails);
