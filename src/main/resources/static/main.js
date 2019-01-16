define(['dom', 'tabsFactory', 'tabUpdate', 'tabExport', 'tabImport'], function(dom, tabsFactory, tabUpdate, tabExport, tabImport) {
	return {
		main: function(options) {
			
			dom.removeChildren(options.el);
			
			var header = dom.createElement(options.el, 'header', { className: 'page-header'});
			dom.createElement(header, 'h1', { className: 'page-title', textContent: 'Issue Resolver'});
			dom.createElement(header, 'div', { className: 'page-description', textContent: 'Allows you to synchronise issues that are resolved with false positive and won\'t fix.'});
			
			var tabs = tabsFactory.create(options.el);
			tabs.tab('Update', tabUpdate.create(options.component.key));
			tabs.tab('Export', tabExport.create(options.component.key));
			tabs.tab('Import', tabImport.create(options.component.key));
			//tabs.show('Update');
		}
	}
});
