function getChildren(n, skipMe){
		var r = [];
		for ( ; n; n = n.nextSibling )
			 if ( n.nodeType == 1 && n != skipMe)
					r.push( n );
		return r;
};