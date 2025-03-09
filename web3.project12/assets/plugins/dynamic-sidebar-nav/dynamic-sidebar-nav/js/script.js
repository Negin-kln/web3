let menuItems = {
    'Home': '#',
    'Dashboard': '#',
    'Profile': '#',
    'Latest': '#',
    'Updates': '#',
    'News': '#'
}

$('#sidebar').Sidebar({
    openTriggerId: 'openSidebar',
    header: 'jQueryScript',
    items: menuItems,
    width: 250,
    sidebarColor: '#333',
    closeButtonColor: '#fff'
});
