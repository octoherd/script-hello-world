/**
 * The "Hello, World!" of all Octoherd Scripts!
 *
 * @param {import('@octoherd/cli').Octokit} octokit
 * @param {import('@octoherd/cli').Repository} repository
 * @param {object} options
 * @param {string} [options.greetingName] name to be greeted
 */
export async function script(octokit, repository, { greetingName = "World" }) {
  octokit.log.info("Hello, %s! From %s", greetingName, repository.full_name);
}
