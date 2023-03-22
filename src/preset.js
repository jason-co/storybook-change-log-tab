function managerEntries(entry = []) {
    return [...entry, require.resolve('../dist/storybook/esm/manager')];
}
module.exports = {
    managerEntries
};
