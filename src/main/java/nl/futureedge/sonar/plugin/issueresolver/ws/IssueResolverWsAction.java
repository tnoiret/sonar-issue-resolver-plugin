package nl.futureedge.sonar.plugin.issueresolver.ws;

import org.sonar.api.server.ws.Definable;
import org.sonar.api.server.ws.RequestHandler;
import org.sonar.api.server.ws.WebService;
import org.sonar.api.server.ws.WebService.NewController;

/**
 * Issue resolver actions marker.
 */
public interface IssueResolverWsAction extends RequestHandler, Definable<WebService.NewController> {

	void define(NewController controller);
}
