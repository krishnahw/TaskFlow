import PropTypes from "prop-types";

// Employee prop validation
export const employeePropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      date: PropTypes.string.isRequired,
      category: PropTypes.string,
      active: PropTypes.bool,
      newTask: PropTypes.bool,
      completed: PropTypes.bool
    })
  ),
  taskCount: PropTypes.number,
  taskTypes: PropTypes.shape({
    active: PropTypes.number,
    newTask: PropTypes.number,
    completed: PropTypes.number,
  }),
});

// Admin prop validation
export const adminPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
});
